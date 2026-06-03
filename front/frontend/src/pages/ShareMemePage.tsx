import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppHeader } from '../components/AppHeader';
import type { Meme } from '../types/dtos';
import { API_GATEWAY } from '../config/api';

export function SharedMemePage() {
  const { token } = useParams<{ token: string }>();
  const [meme, setMeme] = useState<Meme | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const response = await fetch(`${API_GATEWAY}/api/memes/shared/${token}`);
        if (!response.ok) throw new Error('Mème non trouvé');
        setMeme(await response.json());
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur');
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchMeme();
  }, [token]);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <div>
      <AppHeader />
      <main className="mx-auto max-w-2xl px-4 py-8">
        <h1 className="mb-4 text-3xl font-bold">{meme?.title}</h1>
        <img src={meme?.imageUrl} alt={meme?.title} className="w-full rounded-lg" />
      </main>
    </div>
  );
}