import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSessionStore } from '../stores/sessionStore';
import { AppHeader } from '../components/AppHeader';
import { MemeModal } from '../components/MemeModal';
import type { Meme } from '../types/dtos';

export function Gallery() {
  const session = useSessionStore((s) => s.session);
  const navigate = useNavigate();
  const [memes, setMemes] = useState<Meme[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);
  const [deleting, setDeleting] = useState<number | null>(null);

  useEffect(() => {
    if (!session?.isAuthenticated) {
      navigate('/');
      return;
    }

    const fetchGallery = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:3000/api/memes/gallery`,
          {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('authToken') || ''}`,
              'X-Session-Id': session?.sessionId || '',
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || `Erreur ${response.status}`);
        }

        const data = await response.json();
        setMemes(Array.isArray(data) ? data : []);
        setError('');
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
        console.error('Gallery error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [session?.isAuthenticated, session?.sessionId, navigate]);

  const handleRetry = (): void => {
    setError('');
    // Déclencher le refetch en restartant l'effet
    if (session?.isAuthenticated) {
      setLoading(true);
      const retryFetch = async () => {
        try {
          const response = await fetch(
            `http://localhost:3000/api/memes/gallery`,
            {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken') || ''}`,
                'X-Session-Id': session?.sessionId || '',
              },
            }
          );

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `Erreur ${response.status}`);
          }

          const data = await response.json();
          setMemes(Array.isArray(data) ? data : []);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Erreur inconnue');
        } finally {
          setLoading(false);
        }
      };
      retryFetch();
    }
  };

  const handleDelete = async (memeId: number): Promise<void> => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce mème ?')) return;

    setDeleting(memeId);
    try {
      const response = await fetch(
        `http://localhost:3000/api/memes/${memeId}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken') || ''}`,
            'X-Session-Id': session?.sessionId || '',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Erreur lors de la suppression');
      }

      setMemes(memes.filter((m) => m.id !== memeId));
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Erreur lors de la suppression');
    } finally {
      setDeleting(null);
    }
  };

  const handleDownload = async (memeId: number): Promise<void> => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/media/download/${memeId}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken') || ''}`,
            'X-Session-Id': session?.sessionId || '',
          },
        }
      );

      if (!response.ok) throw new Error('Erreur de téléchargement');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `meme-${memeId}.jpg`;
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      alert('Erreur lors du téléchargement');
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100">
        <AppHeader />
        <main className="mx-auto max-w-6xl px-4 py-8">
          <p className="text-center text-gray-500">Chargement de votre galerie...</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <AppHeader />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Ma Galerie ({memes.length})
          </h1>
          <p className="mt-1 text-gray-600">
            {memes.length === 0
              ? 'Vous n\'avez pas encore créé de mèmes'
              : `Retrouvez vos ${memes.length} mème${memes.length > 1 ? 's' : ''}`}
          </p>
        </header>

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700 mb-6">
            <p className="font-medium">Erreur lors du chargement</p>
            <p className="text-sm">{error}</p>
            <button
              onClick={handleRetry}
              className="mt-2 text-sm underline hover:no-underline"
            >
              Réessayer
            </button>
          </div>
        )}

        {memes.length === 0 && !error && (
          <div className="text-center py-12">
            <p className="mb-4 text-gray-500">Vous n'avez pas encore créé de mèmes</p>
            <Link
              to="/"
              className="inline-block rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white hover:bg-blue-700 transition"
            >
              Créer mon premier mème
            </Link>
          </div>
        )}

        {memes.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {memes.map((meme) => (
              <div
                key={meme.id}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow hover:shadow-lg transition"
              >
                <div
                  className="relative h-48 w-full cursor-pointer overflow-hidden bg-gray-100"
                  onClick={() => setSelectedMeme(meme)}
                >
                  <img
                    src={meme.imageUrl}
                    alt={meme.title}
                    className="h-full w-full object-cover hover:scale-105 transition"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{meme.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {meme.textLayers?.length || 0} texte{meme.textLayers?.length !== 1 ? 's' : ''}
                  </p>

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => setSelectedMeme(meme)}
                      className="flex-1 rounded bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-200 transition"
                    >
                      Voir
                    </button>
                    <button
                      onClick={() => handleDownload(meme.id)}
                      className="flex-1 rounded bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600 hover:bg-green-200 transition"
                    >
                      Télécharger
                    </button>
                    <button
                      onClick={() => handleDelete(meme.id)}
                      disabled={deleting === meme.id}
                      className="flex-1 rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {deleting === meme.id ? 'Suppression...' : 'Supprimer'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Modal */}
      <MemeModal meme={selectedMeme} onClose={() => setSelectedMeme(null)} />
    </div>
  );
}



