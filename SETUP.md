# 📖 Guide d'Installation Complète - Backend + Frontend

## Architecture Globale

```
Projet NestJS / Générateur de Mèmes SUPINFO
│
├── Backend (NestJS + Microservices)
│   └── apps/auth_service/
│       ├── API: http://localhost:5552/api
│       ├── BD: MySQL/MariaDB
│       └── Endpoints: register, login, profile
│
└── Frontend (React + Vite)
    └── API Client: http://localhost:5173
        ├── Pages: Register, Login, Profile
        ├── Contexte: AuthContext (gestion d'état)
        └── Services: axios + intercepteurs JWT
```

---

## 🔧 Installation Backend

### Prérequis
- Node.js (v16+)
- MySQL/MariaDB lancé et accessible
- npm ou yarn

### Étapes

1. **Naviguer dans le dossier backend:**
```bash
cd backend
```

2. **Installer les dépendances:**
```bash
npm install
```

3. **Générer le client Prisma:**
```bash
npm run db:auth:generate
```

4. **Créer les migrations:**
```bash
npm run db:auth:migrate
```

5. **Démarrer le service d'authentification:**
```bash
npm run start auth_service
```

✅ L'API sera disponible à: `http://localhost:5552/api`

---

## 🎨 Installation Frontend

### Prérequis
- Node.js (v16+)
- npm ou yarn

### Étapes

1. **Naviguer dans le dossier frontend:**
```bash
cd frontend
```

2. **Installer les dépendances:**
```bash
npm install
```

3. **Démarrer le serveur de développement:**
```bash
npm run dev
```

✅ L'application sera disponible à: `http://localhost:5173`

---

## 🧪 Tester l'Intégration

### 1. Accéder au Frontend
- Ouvrir http://localhost:5173 dans votre navigateur
- Vous serez automatiquement redirigé vers `/login`

### 2. S'inscrire
- Cliquer sur "S'inscrire"
- Remplir le formulaire:
  - **Nom**: Votre nom
  - **Prénom**: Votre prénom
  - **Email**: test@example.com
  - **Mot de passe**: password123 (min 8 caractères)
  - **Confirmer MDP**: password123

### 3. Vérifier la Base de Données
```sql
-- Vérifier que l'utilisateur a été créé
SELECT * FROM user;
```

### 4. Se Connecter
- Cliquer sur "Connexion"
- Entrer les identifiants:
  - **Email**: test@example.com
  - **Mot de passe**: password123
- Vous serez redirigé vers la page `/profile`

### 5. Voir le Profil
- Affichage des informations utilisateur
- Bouton "Déconnexion"

---

## 📦 Structure du Projet

### Backend
```
backend/
├── apps/
│   ├── auth_service/
│   │   ├── .env                    # Variables d'environnement
│   │   ├── prisma.config.ts        # Configuration Prisma
│   │   ├── prisma/schema.prisma    # Modèle de données
│   │   └── src/
│   │       ├── auth_service.module.ts    # Module principal
│   │       ├── auth_service.service.ts   # Logique d'auth
│   │       ├── auth_service.controller.ts # Routes API
│   │       ├── dto/                # Data Transfer Objects
│   │       ├── prisma/             # Service Prisma
│   │       └── main.ts             # Point d'entrée
│   └── api-gateway/                # (future gateway)
├── package.json
└── tsconfig.json
```

### Frontend
```
frontend/
├── src/
│   ├── components/
│   │   └── PrivateRoute.jsx        # Route protégée
│   ├── contexts/
│   │   └── AuthContext.jsx         # Contexte d'authentification
│   ├── pages/
│   │   ├── Login.jsx               # Page de connexion
│   │   ├── Register.jsx            # Page d'inscription
│   │   └── Profile.jsx             # Page profil
│   ├── services/
│   │   ├── api.js                  # Configuration axios
│   │   └── authService.js          # Logique client d'auth
│   ├── styles/
│   │   ├── Auth.css                # Styles auth
│   │   └── Profile.css             # Styles profil
│   ├── App.jsx                     # Routing principal
│   ├── main.jsx                    # Point d'entrée
│   └── index.css                   # Styles globaux
├── .env                            # Variables d'environnement
├── vite.config.js
└── package.json
```

---

## 🔑 Variables d'Environnement

### Backend (`backend/apps/auth_service/.env`)
```env
DATABASE_URL="mysql://root@localhost:3306/db_auth_meme_generator"
DATABASE_USER="root"
DATABASE_PASSWORD=""
DATABASE_NAME="db_auth_meme_generator"
DATABASE_HOST="localhost"
DATABASE_PORT=3306
PORT=5552
JWT_SECRET="H823Y2878FR42UIFN2JNF293RY782323U"
```

### Frontend (`frontend/.env`)
```env
VITE_API_BASE_URL=http://localhost:5552/api
```

---

## 🔌 Endpoints API

### Register
```http
POST /api/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "user": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "createdAt": "2024-01-01T12:00:00Z"
  },
  "access_token": "eyJhbGciOiJIUzI1NiIs..."
}
```

### Login
```http
POST /api/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "user": {
    "id": 1,
    "email": "john@example.com",
    ...
  },
  "access_token": "eyJhbGciOiJIUzI1NiIs..."
}
```

### Get Profile
```http
GET /api/profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...

Response:
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  ...
}
```

---

## 🚀 Commandes Utiles

### Backend
```bash
# Démarrer le service auth
npm run start auth_service

# Développement avec watch
npm run start:dev auth_service

# Build
npm run build

# Tests
npm run test

# Migrations Prisma
npm run db:auth:migrate
npm run db:auth:generate
```

### Frontend
```bash
# Démarrer le serveur dev
npm run dev

# Build pour production
npm run build

# Aperçu de la build
npm run preview

# Linting
npm run lint
```

---

## 🐛 Dépannage

### ❌ "Cannot find module '@prisma/client'"
```bash
npm install @prisma/client
```

### ❌ "Connection refused on port 5552"
- Vérifier que le backend est démarré: `npm run start auth_service`
- Vérifier le PORT dans .env (doit être 5552)

### ❌ "CORS error"
- CORS est activé côté backend dans `main.ts`
- Vérifier que le frontend accède à `http://localhost:5552`

### ❌ "Accès refusé pour l'utilisateur 'root'"
- Vérifier les variables d'environnement `.env`
- Vérifier que MySQL est lancé
- Vérifier les identifiants MySQL

### ❌ "JWT_SECRET n'est pas défini"
- Vérifier `JWT_SECRET` dans le `.env` du backend
- Relancer le backend après modification

### ❌ "Token expiré"
- Le token JWT est valable 30 jours par défaut
- Reconnecter-vous pour obtenir un nouveau token

---

## 📚 Documentation

- [React Documentation](https://react.dev)
- [NestJS Documentation](https://docs.nestjs.com)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Vite Documentation](https://vitejs.dev)
- [Axios Documentation](https://axios-http.com)
- [React Router Documentation](https://reactrouter.com)

---

## ✅ Checklist de Vérification

- [ ] MySQL/MariaDB est lancé
- [ ] Backend démarré sur port 5552
- [ ] Frontend démarré sur port 5173
- [ ] Variables d'environnement configurées
- [ ] CORS activé côté backend
- [ ] Migrations Prisma exécutées
- [ ] Base de données accessible
- [ ] Peut s'inscrire sur le frontend
- [ ] Peut se connecter avec les identifiants
- [ ] Peut voir le profil après connexion
- [ ] Token JWT stocké dans localStorage
- [ ] Peut se déconnecter

---

## 🎯 Prochaines Étapes

1. **Implémenter les autres services microservices:**
   - `meme_service` - Gestion des mèmes
   - `media_service` - Gestion des médias
   - `notification_service` - Notifications

2. **Ajouter des fonctionnalités:**
   - Oubli de mot de passe
   - Édition du profil
   - Suppression de compte
   - Verification d'email

3. **Améliorer la sécurité:**
   - Refresh tokens
   - Rate limiting
   - Validation des données
   - Hachage des mots de passe (déjà fait)

4. **Deploiement:**
   - Docker
   - CI/CD
   - Environnements prod/staging

---

## 📞 Support

Pour des questions spécifiques:
1. Vérifier les logs du terminal
2. Consulter les fichiers `.env`
3. Vérifier les endpoints API dans Postman
4. Consulter la documentation officielle

Bonne chance! 🎉
