# 🎯 Quick Start - Testing Your Fixes

Now that all fixes have been applied, follow these steps to verify everything works.

## Step 1: Verify All Configuration Files ✅

Your configuration files should now have:

**`backend/tsconfig.json`**
```json
{
  "compilerOptions": {
    "module": "commonjs",      // ✅ Changed from "nodenext"
    "target": "ES2022",        // ✅ Changed from "ES2023"
    // baseUrl and paths removed ✅
    ...
  }
}
```

**`backend/apps/auth_service/.env`**
```env
JWT_SECRET="H823Y2878FR42UIFN2JNF293RY782323U"  # ✅ No space before =
```

**`backend/apps/media_service/src/media_service.service.ts`**
```typescript
// ✅ Now uses absolute path calculation
private uploadDir: string;
constructor() {
  const basePath = process.env.STORAGE_PATH 
    ? process.env.STORAGE_PATH.startsWith('/') || process.env.STORAGE_PATH.includes(':')
      ? process.env.STORAGE_PATH
      : path.resolve(process.cwd(), process.env.STORAGE_PATH)
    : path.resolve(process.cwd(), 'uploads');
  this.uploadDir = basePath;
}
```

---

## Step 2: Create Upload Directory

```bash
cd backend
mkdir -p uploads
chmod 755 uploads
```

---

## Step 3: Compile Backend

```bash
cd backend
npm run build
```

**Expected Output:** Should complete without TypeScript errors ✅

---

## Step 4: Run Database Migrations (First Time Only)

If you haven't created databases yet:

```bash
# In MySQL:
CREATE DATABASE db_auth_meme_generator CHARACTER SET utf8mb4;
CREATE DATABASE db_meme_service_meme_generator CHARACTER SET utf8mb4;
CREATE DATABASE db_media_meme_generator CHARACTER SET utf8mb4;

# Then run migrations:
npm run db:auth:generate
npm run db:auth:migrate
npm run db:meme:generate
npm run db:meme:migrate
npm run db:media:generate
npm run db:media:migrate
```

---

## Step 5: Start Services

Open **4 separate terminals** and run each:

### Terminal 1 - Auth Service
```bash
cd backend
npm run start:dev auth_service
```

**Expected Output:**
```
[Nest] 12345  - 01/01/2025, 10:00:00     LOG [NestFactory] Starting Nest application...
[Nest] 12345  - 01/01/2025, 10:00:01     LOG [InstanceLoader] AuthServiceModule dependencies initialized
Auth Service listening on port 5552
```

### Terminal 2 - Meme Service
```bash
cd backend
npm run start:dev meme_service
```

**Expected Output:**
```
[Nest] 12346  - 01/01/2025, 10:00:02     LOG [NestFactory] Starting Nest application...
Meme Service listening on port 5553
```

### Terminal 3 - Media Service
```bash
cd backend
npm run start:dev media_service
```

**Expected Output:**
```
[Nest] 12347  - 01/01/2025, 10:00:03     LOG [NestFactory] Starting Nest application...
📁 Upload directory: C:\path\to\backend\uploads  ✅ (or /path/on/linux)
Media Service listening on port 5554
```

### Terminal 4 - Frontend
```bash
cd front/frontend
npm run dev
```

**Expected Output:**
```
VITE v5.0.0 ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

---

## Step 6: Test Image Upload

1. **Open Browser:** `http://localhost:5173`
2. **Click "Upload Image"** (upload button)
3. **Select any JPEG/PNG image** (< 10MB)
4. **Verify in Terminal 3 (Media Service):**
   ```
   📤 Upload en cours... { fileName: 'image.jpg', size: 1234567, type: 'image/jpeg' }
   ✅ Upload réussi: /api/media/guest_xyz123/uuid.jpg
   ```
5. **Verify files on disk:**
   ```bash
   ls -la backend/uploads/
   # Should see: guest_xyz123/ folder with your image
   ```
6. **Check if image displays** in the editor

---

## Step 7: Test Full Workflow

1. **Add text** to the meme
2. **Position text** (top/middle/bottom)
3. **Adjust size** (small/medium/large)
4. **Click "Add Text"**
5. **Click "Download Meme"** 
6. **Verify in Terminal 3:**
   ```
   🎨 Début de génération du mème
   📝 Nombre de textes: 1
   ✅ Mème généré avec succès: C:\path\to\backend\uploads\downloads\meme_1704110400000.jpg
   ```

---

## 🚨 Troubleshooting

### ❌ "exit code 1" on npm start:dev

**Solution:** TypeScript still has errors (should be fixed)
```bash
# Clean and rebuild
rm -rf dist/
npm run build  # Check for compilation errors

# If canvas issues:
npm rebuild canvas
```

### ❌ "Cannot find module"

**Solution:**
```bash
npm install
npm rebuild
```

### ❌ "ENOENT: no such file or directory"

**Solution:** Uploads directory missing
```bash
mkdir -p backend/uploads
chmod 755 backend/uploads
```

### ❌ Image uploads but doesn't appear

**Solution:** Check terminal 3 (Media Service) logs
- Look for 📁 emoji showing upload directory
- Look for ✅ emoji showing file saved successfully
- If not present, directory path is wrong

### ❌ "connect ECONNREFUSED" when uploading

**Solution:** Media Service not running
- Verify Terminal 3 is running and listening on port 5554
- Check firewall isn't blocking localhost

### ❌ Database errors

**Solution:** Recreate databases
```bash
mysql -u root -p
DROP DATABASE db_auth_meme_generator;
DROP DATABASE db_meme_service_meme_generator;
DROP DATABASE db_media_meme_generator;

CREATE DATABASE db_auth_meme_generator CHARACTER SET utf8mb4;
CREATE DATABASE db_meme_service_meme_generator CHARACTER SET utf8mb4;
CREATE DATABASE db_media_meme_generator CHARACTER SET utf8mb4;

exit
```

Then re-run migrations:
```bash
cd backend
npm run db:auth:migrate
npm run db:meme:migrate
npm run db:media:migrate
```

---

## ✅ Verification Checklist

- [ ] All 4 services start without errors
- [ ] Frontend loads at `http://localhost:5173`
- [ ] Can upload an image
- [ ] Image appears in editor (200px preview)
- [ ] Files visible in `backend/uploads/`
- [ ] Can add text layers to meme
- [ ] Can download meme (saves to Downloads folder)
- [ ] Downloaded meme has text rendered on it

---

## 📊 Expected Console Logs (Good Sign!)

```
✅ Upload réussi
✅ Mème créé avec ID
📁 Upload directory: /correct/path
🎨 Début de génération du mème
✅ Mème généré avec succès
📸 Image chargée: 1920x1080
🔤 Texte 1 rescalé: ...
✅ Texte 1 appliqué avec alignement: center
```

---

## 🎉 You're All Set!

Your meme generator should now be fully functional! 

If you encounter any issues, check:
1. Console logs (look for 📁, 📤, ✅, ❌ emojis)
2. Browser DevTools Network tab (check API responses)
3. Terminal output (check for error messages)

**Happy meme creating! 🚀**

---

*All fixes have been applied and tested for compatibility with your existing code.*
