import { useEffect } from 'react';
import type { Meme } from '../types/dtos';

interface MemeModalProps {
  meme: Meme | null;
  onClose: () => void;
}

export function MemeModal({ meme, onClose }: MemeModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!meme) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-lg bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full hover:bg-gray-100 p-2"
          aria-label="Fermer"
        >
          <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenu */}
        <div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900">{meme.title}</h2>
          <p className="mt-1 text-sm text-gray-500">
            Visibilité: <strong>{meme.visibility}</strong>
          </p>

          {/* Image */}
          <img
            src={meme.imageUrl}
            alt={meme.title}
            className="mb-6 w-full rounded-lg border border-gray-200"
          />

          {/* Textes */}
          {meme.textLayers && meme.textLayers.length > 0 && (
            <div className="mb-6">
              <h3 className="mb-3 font-semibold text-gray-900">Textes ({meme.textLayers.length})</h3>
              <div className="space-y-2">
                {meme.textLayers.map((text) => (
                  <div key={text.id} className="rounded bg-gray-50 p-3">
                    <p className="font-mono text-sm text-gray-900">{text.content}</p>
                    <p className="mt-1 text-xs text-gray-500">
                      Font: {text.fontSize}px • Couleur: {text.color}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Info */}
          <div className="mb-6 rounded bg-blue-50 p-3 text-sm text-blue-700">
            Visibilité: <strong>{meme.visibility}</strong> • État: <strong>{meme.status}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}