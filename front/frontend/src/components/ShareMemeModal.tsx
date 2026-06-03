import { useState } from 'react';
import { createPortal } from 'react-dom';
import { shareMeme, openShareLink, type SharePlatform } from '../services/shareService';
import type { Meme } from '../types/dtos';
import { useSessionStore } from '../stores/sessionStore';

interface ShareMemeModalProps {
  meme?: Meme;
  isOpen: boolean;
  onClose: () => void;
}

const platforms: { id: SharePlatform; label: string; icon: string; color: string }[] = [
  { id: 'facebook', label: 'Facebook', icon: '📘', color: 'bg-blue-600' },
  { id: 'twitter', label: 'Twitter', icon: '𝕏', color: 'bg-black' },
  { id: 'whatsapp', label: 'WhatsApp', icon: '💬', color: 'bg-green-500' },
  { id: 'linkedin', label: 'LinkedIn', icon: '💼', color: 'bg-blue-700' },
  { id: 'email', label: 'Email', icon: '✉️', color: 'bg-gray-500' },
  { id: 'copy_link', label: 'Copier le lien', icon: '🔗', color: 'bg-gray-400' },
];

export function ShareMemeModal({ meme, isOpen, onClose }: ShareMemeModalProps) {
  const session = useSessionStore((s) => s.session);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Valider la visibilité du mème avant de permettre le partage
  const canShare = meme && meme.visibility === 'PUBLIC';

  if (!isOpen || !meme) return null;

  const handleShare = async (platform: SharePlatform) => {
    if (!session || !canShare) {
      setError('Ce mème doit être PUBLIC pour être partagé');
      return;
    }

    // Réinitialiser l'erreur
    setError(null);

    try {
      setLoading(true);
      const result = await shareMeme(
        meme.id,
        platform,
        session.sessionId,
        session.userId || undefined,
        message || undefined,
      );

      if (platform === 'copy_link') {
        navigator.clipboard.writeText(result.shareUrl);
        setCopiedLink(result.shareUrl);
        setTimeout(() => setCopiedLink(null), 2000);
      } else {
        openShareLink(result.socialMediaUrl);
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Erreur lors du partage';
      console.error('Erreur lors du partage:', err);
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // Rendre en portail pour éviter les problèmes de stacking context
  const modalContent = (
    <>
      {/* Overlay sombre */}
      <div
        className="fixed inset-0 z-40 bg-black/50 transition-opacity"
        onClick={!loading ? onClose : undefined}
      />

      {/* Modal au-dessus */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="w-full max-w-md rounded-lg bg-white p-6 shadow-2xl pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Partager ce mème</h2>
            <button
              onClick={onClose}
              disabled={loading}
              className="rounded-full p-1 hover:bg-gray-100 transition disabled:opacity-50"
              aria-label="Fermer"
            >
              <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <img
            src={meme.imageUrl}
            alt={meme.title}
            className="mb-4 h-40 w-full rounded-lg object-cover border border-gray-200"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ajouter un message (optionnel)"
            disabled={loading || !canShare}
            className="mb-4 w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none disabled:bg-gray-50"
            rows={3}
          />

          {error && (
            <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {!canShare && (
            <div className="mb-4 rounded-lg bg-yellow-50 border border-yellow-200 p-3 text-sm text-yellow-700">
              ⚠️ Ce mème doit être PUBLIC pour être partagé
            </div>
          )}

          <div className="mb-4 grid grid-cols-3 gap-2">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => handleShare(platform.id)}
                disabled={loading || !canShare}
                className={`flex flex-col items-center gap-1 rounded-lg p-3 text-white transition ${
                  platform.color
                } hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <span className="text-2xl">{platform.icon}</span>
                <span className="text-xs font-medium text-center">{platform.label}</span>
              </button>
            ))}
          </div>

          {copiedLink && (
            <p className="mb-4 text-center text-sm text-green-600 font-medium">✓ Lien copié !</p>
          )}

          <button
            onClick={onClose}
            disabled={loading}
            className="w-full rounded-lg bg-gray-200 py-2 font-medium text-gray-800 transition hover:bg-gray-300 disabled:opacity-50"
          >
            Fermer
          </button>
        </div>
      </div>
    </>
  );

  // Utiliser un portail pour rendre le modal en dehors du DOM normal
  return createPortal(modalContent, document.body);
}