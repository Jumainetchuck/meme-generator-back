# Frontend - Système d'Authentification

Frontend React + Vite pour le système d'authentification du générateur de mèmes SUPINFO.

## 🚀 Installation

### Prérequis
- Node.js (v16+)
- npm ou yarn

### Étapes

1. **Installer les dépendances:**
```bash
npm install
```

2. **Démarrer le serveur de développement:**
```bash
npm run dev
```

L'application sera accessible à `http://localhost:5173`

## 📋 Architecture

```
src/
├── components/          # Composants réutilisables
│   └── PrivateRoute.jsx
├── contexts/           # Contextes React
│   └── AuthContext.jsx
├── pages/              # Pages principales
│   ├── Login.jsx
│   ├── Register.jsx
│   └── Profile.jsx
├── services/           # Services API
│   ├── api.js          # Configuration axios
│   └── authService.js  # Logique d'authentification
├── styles/             # Fichiers CSS
│   ├── Auth.css
│   └── Profile.css
├── App.jsx             # Composant principal avec routing
├── main.jsx            # Point d'entrée
└── index.css           # Styles globaux
```

## 📚 Fonctionnalités

### 1. Authentification
- ✅ Inscription (Register)
- ✅ Connexion (Login)
- ✅ Stockage du token JWT dans localStorage
- ✅ Intercepteurs axios pour ajouter le token automatiquement
- ✅ Gestion des erreurs d'authentification

### 2. Routes
- `/login` - Page de connexion (publique)
- `/register` - Page d'inscription (publique)
- `/profile` - Page profil (protégée)
- `/` - Redirection vers /login

### 3. Contexte d'Authentification (useAuth)
```javascript
const { 
  user,              // Données utilisateur
  token,             // Token JWT
  isLoading,         // Indicateur de chargement
  error,             // Messages d'erreur
  login,             // Fonction de connexion
  register,          // Fonction d'inscription
  logout,            // Fonction de déconnexion
  isAuthenticated    // Booléen si connecté
} = useAuth();
```

## 🔌 Configuration API

**Base URL:** `http://localhost:5552/api`

### Endpoints
- `POST /api/register` - Inscription
- `POST /api/login` - Connexion
- `GET /api/profile` - Récupérer le profil (authentifié)

## 🔐 Stockage

Les données suivantes sont stockées dans localStorage:
- `authToken` - Token JWT
- `user` - Données utilisateur (id, email)

## 🛠️ Scripts disponibles

```bash
# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Aperçu de la build
npm run preview
```

## 📦 Dépendances principales

- **react** - Bibliothèque UI
- **react-router-dom** - Routing côté client
- **axios** - Client HTTP

## 🎨 Styling

Le projet utilise CSS pur avec:
- Gradient linear pour le design
- Flexbox pour la mise en page
- Transitions et animations fluides
- Design responsive

## 🚨 Erreurs courantes

### "Cannot find module '@prisma/client'"
C'est normal - Prisma est côté backend seulement.

### "Accès refusé pour l'utilisateur"
Vérifiez que le backend auth_service est bien démarré sur le port 5552:
```bash
cd backend
npm run start auth_service
```

### CORS Error
Si vous avez une erreur CORS, vérifiez que le backend a la configuration CORS appropriée.

## 📝 Exemple d'utilisation

```javascript
import { useAuth } from './contexts/AuthContext';

function MyComponent() {
  const { login, logout, user, isAuthenticated } = useAuth();
  
  const handleLogin = async () => {
    try {
      await login({ email: 'user@test.com', password: 'password123' });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  
  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Bienvenue {user.email}</p>
          <button onClick={logout}>Déconnexion</button>
        </>
      ) : (
        <button onClick={handleLogin}>Connexion</button>
      )}
    </div>
  );
}
```

## 🤝 Contribution

N/A - Projet SUPINFO

## 📄 License

UNLICENSED
