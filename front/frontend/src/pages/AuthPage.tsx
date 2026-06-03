import { useState } from 'react';
import { Link, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useSessionStore } from '../stores/sessionStore';
import { loginUser, registerUser } from '../services/authService';
import { AppHeader } from '../components/AppHeader';

const inputClass =
  'w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/15';

const labelClass = 'mb-1 block text-xs font-medium text-gray-600';

export function AuthLayout() {
  const location = useLocation();
  const isLogin = location.pathname.includes('login');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-gray-50 to-gray-100">
      <AppHeader />

      <main className="mx-auto flex justify-center px-4 py-10 sm:py-14">
        <div className="w-full max-w-md">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              {isLogin ? 'Bon retour !' : 'Rejoignez MemeGen'}
            </h1>
            <p className="mt-1.5 text-sm text-gray-500">
              Sauvegardez vos mèmes au-delà de 24 h
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200/90 bg-white p-5 shadow-lg shadow-gray-200/40 sm:p-6">
            <nav className="mb-6 flex rounded-xl border border-gray-100 bg-gray-50/80 p-1">
              <Link
                to="/auth/login"
                className={`flex-1 cursor-pointer rounded-lg py-2 text-center text-sm font-semibold transition ${
                  isLogin
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-white hover:text-gray-900'
                }`}
              >
                Connexion
              </Link>
              <Link
                to="/auth/register"
                className={`flex-1 cursor-pointer rounded-lg py-2 text-center text-sm font-semibold transition ${
                  !isLogin
                    ? 'bg-amber-400 text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:bg-white hover:text-gray-900'
                }`}
              >
                Inscription
              </Link>
            </nav>

            <Outlet />
          </div>

          <p className="mt-5 text-center">
            <Link
              to="/"
              className="cursor-pointer text-sm font-medium text-blue-600 no-underline transition hover:text-blue-700 hover:underline"
            >
              ← Retour à l’éditeur
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

function AuthError({ message }: { message: string }) {
  return (
    <div
      role="alert"
      className="rounded-lg border border-red-100 bg-red-50/80 px-3 py-2 text-sm text-red-700"
    >
      {message}
    </div>
  );
}

export function LoginForm() {
  const navigate = useNavigate();
  const setAuthenticated = useSessionStore((s) => s.setAuthenticated);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      // Utiliser loginUser, pas registerUser
      const { user, access_token } = await loginUser({ email, password });
      
      // ✅ Passer firstName, lastName et email
      setAuthenticated(user.id, access_token, user.firstName, user.lastName, user.email);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de connexion');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
      {error && <AuthError message={error} />}

      <div>
        <label htmlFor="login-email" className={labelClass}>
          Email
        </label>
        <input
          id="login-email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="vous@exemple.com"
        />
      </div>

      <div>
        <label htmlFor="login-password" className={labelClass}>
          Mot de passe
        </label>
        <input
          id="login-password"
          type="password"
          required
          minLength={8}
          autoComplete="current-password"
          className={inputClass}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="8 caractères minimum"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-1 cursor-pointer w-full rounded-lg bg-blue-600 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? 'Connexion…' : 'Se connecter'}
      </button>

      <p className="text-center text-xs text-gray-500">
        Pas encore de compte ?{' '}
        <Link
          to="/auth/register"
          className="font-semibold text-amber-600 no-underline hover:underline"
        >
          S’inscrire
        </Link>
      </p>
    </form>
  );
}

export function RegisterForm() {
  const navigate = useNavigate();
  const setAuthenticated = useSessionStore((s) => s.setAuthenticated);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
    setLoading(true);
    try {
      const { user, access_token } = await registerUser({
        firstName,
        lastName,
        email,
        password,
      });
      // Passer firstName, lastName et email
      setAuthenticated(user.id, access_token, user.firstName, user.lastName, user.email);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur d’inscription');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
      {error && <AuthError message={error} />}

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="reg-first" className={labelClass}>
            Prénom
          </label>
          <input
            id="reg-first"
            required
            className={inputClass}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Jean"
          />
        </div>
        <div>
          <label htmlFor="reg-last" className={labelClass}>
            Nom
          </label>
          <input
            id="reg-last"
            required
            className={inputClass}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Dupont"
          />
        </div>
      </div>

      <div>
        <label htmlFor="reg-email" className={labelClass}>
          Email
        </label>
        <input
          id="reg-email"
          type="email"
          required
          className={inputClass}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="vous@exemple.com"
        />
      </div>

      <div>
        <label htmlFor="reg-password" className={labelClass}>
          Mot de passe
        </label>
        <input
          id="reg-password"
          type="password"
          required
          minLength={8}
          autoComplete="new-password"
          className={inputClass}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="8 caractères minimum"
        />
      </div>

      <div>
        <label htmlFor="reg-confirm" className={labelClass}>
          Confirmer le mot de passe
        </label>
        <input
          id="reg-confirm"
          type="password"
          required
          minLength={8}
          className={inputClass}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Répétez le mot de passe"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-1 cursor-pointer w-full rounded-lg bg-amber-400 py-2.5 text-sm font-bold text-gray-900 shadow-sm transition hover:bg-amber-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? 'Création…' : 'Créer mon compte'}
      </button>

      <p className="text-center text-xs text-gray-500">
        Déjà inscrit ?{' '}
        <Link
          to="/auth/login"
          className="font-semibold text-blue-600 no-underline hover:underline"
        >
          Se connecter
        </Link>
      </p>
    </form>
  );
}
