import { Link } from 'react-router-dom';
import { useSessionStore } from '../stores/sessionStore';

export function AppHeader() {
  const session = useSessionStore((s) => s.session);
  const logout = useSessionStore((s) => s.logout);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="text-lg font-bold tracking-tight text-gray-900 transition hover:text-blue-600"
        >
          Meme<span className="text-blue-600">Gen</span>
        </Link>

        <nav className="flex items-center gap-3 sm:gap-4">
          {session?.isAuthenticated ? (
            <>
              {/* Afficher le nom de l'utilisateur */}
              <div className="hidden items-center gap-2 rounded-full bg-blue-50 px-3 py-1 sm:flex">
                <span className="text-xs font-medium text-blue-700">
                  {session.firstName} {session.lastName}
                </span>
              </div>

              {/*  Lien vers la galerie */}
              <Link
                to="/gallery"
                className="cursor-pointer rounded-lg border border-blue-200 px-3 py-1.5 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
              >
                Galerie
              </Link>

              <button
                type="button"
                onClick={logout}
                className="cursor-pointer rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 transition hover:border-gray-300 hover:bg-gray-50"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="cursor-pointer rounded-lg border border-blue-200 px-3 py-1.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Connexion
              </Link>
              <Link
                to="/auth/register"
                className="cursor-pointer rounded-lg bg-amber-400 px-3 py-1.5 text-sm font-bold text-gray-900 shadow-sm transition hover:bg-amber-500"
              >
                Inscription
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}