# 🚀 Setup & Configuration Guide - Meme Generator

## Prerequisites

- **Node.js**: v18+ (recommend v20+)
- **npm**: v9+
- **MySQL**: v8+ running locally or remote
- **System dependencies** (for Canvas library):
  - Windows: No additional setup needed
  - macOS: `brew install cairo jpeg libpng giflib`
  - Linux: `apt-get install build-essential cairo-dev jpeg-dev libpng-dev giflib-dev`

---

## Installation & Setup

### 1. Install Dependencies

```bash
cd backend
npm install
cd ../front/frontend
npm install
cd ../../
```

### 2. Setup Databases

Create MySQL databases for each service:

```bash
mysql -u root -p
```

```sql
-- Auth Service Database
CREATE DATABASE db_auth_meme_generator CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Meme Service Database
CREATE DATABASE db_meme_service_meme_generator CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Media Service Database
CREATE DATABASE db_media_meme_generator CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Exit MySQL
EXIT;
```

### 3. Configure Environment Variables

**Backend Services:**

```bash
# auth_service
cp backend/apps/auth_service/.env.example backend/apps/auth_service/.env
# Edit and update DATABASE credentials

# meme_service
cp backend/apps/meme_service/.env.example backend/apps/meme_service/.env
# Edit and update DATABASE credentials

# media_service
cp backend/apps/media_service/.env.example backend/apps/media_service/.env
# Edit and update DATABASE credentials + STORAGE_PATH
```

**Frontend:**

```bash
# Already configured in src/config/api.ts
# Change API_GATEWAY URL if needed: 'http://localhost:3000'
```

### 4. Run Database Migrations

```bash
cd backend

# Auth Service
npm run db:auth:generate
npm run db:auth:migrate

# Meme Service
npm run db:meme:generate
npm run db:meme:migrate

# Media Service
npm run db:media:generate
npm run db:media:migrate

cd ..
```

---

## Running Services

### Terminal 1 - Backend Services (from `backend/` directory)

```bash
# Option A: Run all services together
npm start

# Option B: Run services individually
npm run start:dev auth_service
npm run start:dev meme_service
npm run start:dev media_service
```

### Terminal 2 - Frontend (from `front/frontend/` directory)

```bash
npm run dev
```

Expected output:
```
VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

---

## Verify Setup

### Check Backend Services

- **Auth Service**: `curl http://localhost:5552/health` → Should respond
- **Meme Service**: `curl http://localhost:5553/memes` → Should respond
- **Media Service**: `curl http://localhost:5554/api/media` → Should respond
- **API Gateway**: `curl http://localhost:3000/health` → Should respond

### Check Frontend

- Open `http://localhost:5173` in browser
- Should see Meme Editor page
- Upload an image - should save to `backend/uploads/`

---

## Common Issues & Solutions

### ❌ Error: "Cannot find module '@nestjs/...'"

**Solution:**
```bash
npm install
npm run build
```

### ❌ Error: "ENOENT: no such file or directory, mkdir '/uploads'"

**Solution:** Create uploads directory

```bash
mkdir -p backend/uploads
chmod 755 backend/uploads
```

### ❌ Error: "ECONNREFUSED 127.0.0.1:3306"

**Solution:** MySQL not running

```bash
# Windows (if using MySQL 8.0)
net start MySQL80

# macOS
brew services start mysql

# Linux
sudo systemctl start mysql
```

### ❌ Error: "Cannot find canvas native build"

**Solution:** Rebuild canvas for your system

```bash
cd backend
npm rebuild canvas
cd ..
```

### ❌ Image upload fails (but no error)

**Solution:** Check STORAGE_PATH and disk permissions

```bash
# Verify uploads directory
ls -la backend/uploads/

# Ensure writable
chmod -R 777 backend/uploads/
```

### ❌ "TypeScript compilation failed"

**Solution:** Clear build cache and rebuild

```bash
cd backend
rm -rf dist/
npm run build
```

---

## 📊 Project Structure

```
backend/
├── apps/
│   ├── api-gateway/          # Main API entry point (port 3000)
│   ├── auth_service/          # JWT authentication (port 5552)
│   ├── meme_service/          # Meme CRUD, text layers (port 5553)
│   ├── media_service/         # File upload, image processing (port 5554)
│   └── notification_service/  # Notifications (minimal)
├── uploads/                   # Uploaded images & generated memes
├── prisma/                    # Database schemas
└── package.json

front/frontend/
├── src/
│   ├── pages/MemeEditor.tsx   # Main meme creation UI
│   ├── components/            # React components
│   ├── services/              # API calls
│   └── stores/               # Zustand state management
└── public/
```

---

## 🔐 Security Notes

1. **Change JWT_SECRET** in all `.env` files before production
2. **Use HTTPS** in production
3. **Implement API rate limiting**
4. **Validate file uploads** on frontend AND backend (already implemented)
5. **Use environment variables** for all secrets

---

## 🛠️ Useful Commands

```bash
# Rebuild everything
npm run build

# Run tests
npm test

# Format code
npm run format

# View database with Prisma Studio
npm run db:auth:studio
npm run db:meme:studio
npm run db:media:studio

# Clean build
rm -rf dist/ && npm run build
```

---

## ✅ Checklist Before Launch

- [ ] MySQL databases created
- [ ] `.env` files configured for all services
- [ ] Database migrations completed
- [ ] `uploads/` directory created and writable
- [ ] All services start without errors (exit code 0)
- [ ] Frontend loads at `http://localhost:5173`
- [ ] Image upload works and files appear in `backend/uploads/`
- [ ] Can create memes with text layers
- [ ] Can download generated memes

---

**Happy meme creating! 🎉**
