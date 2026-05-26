import React, { useState, useEffect, useCallback, useId } from 'react';
import { Link } from 'react-router-dom';
import { useSessionStore } from '../stores/sessionStore';
import { createMeme, addTextLayer } from '../services/memeService';
import { uploadImage, downloadMeme } from '../services/mediaService';
import { AppHeader } from '../components/AppHeader';
import { MemeCanvas } from '../components/MemeCanvas';
import { TextStyleControls } from '../components/TextStyleControls';
import { MEME_TEXT_DEFAULTS } from '../components/MemeTextOverlay';
import {
  getFontSizeFromPreset,
  getPositionCoords,
  getPositionLabel,
  type TextPositionId,
  type TextSizeId,
} from '../config/memeTextOptions';
import type { TextLayer, Meme } from '../types/dtos';

export const MemeEditor: React.FC = () => {
  const { session, initializeSession } = useSessionStore();
  const fileInputId = useId();
  const [image, setImage] = useState<string | null>(null);
  const [memeId, setMemeId] = useState<number | null>(null);
  const [texts, setTexts] = useState<TextLayer[]>([]);
  const [currentText, setCurrentText] = useState('');
  const [textSize, setTextSize] = useState<TextSizeId>('medium');
  const [textPosition, setTextPosition] = useState<TextPositionId>('bottom');
  const [loading, setLoading] = useState(false);

  const previewCoords = getPositionCoords(textPosition);
  const previewFontSize = getFontSizeFromPreset(textSize);

  const handleInit = useCallback(() => {
    initializeSession();
  }, [initializeSession]);

  useEffect(() => {
    handleInit();
  }, [handleInit]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!session) {
      alert('Session non initialisée. Rechargez la page.');
      return;
    }

    try {
      setLoading(true);
      const imageUrl = await uploadImage(file, session.sessionId);
      setImage(imageUrl);
      setTexts([]);

      const meme: Meme = await createMeme(
        { title: `Meme ${Date.now()}`, imageUrl },
        session.sessionId,
        session.userId || undefined,
      );
      setMemeId(meme.id);
    } catch (error) {
      console.error('Upload/create meme error:', error);
      const msg = error instanceof Error ? error.message : 'Erreur inconnue';
      alert(`Impossible de créer le mème : ${msg}`);
    } finally {
      setLoading(false);
      e.target.value = '';
    }
  };

  const showLivePreview = Boolean(image && memeId && currentText.trim());

  const handleAddText = async () => {
    if (!memeId || !currentText.trim() || !session) return;

    const { xPosition, yPosition, textAnchor } = getPositionCoords(textPosition);
    const fontSize = getFontSizeFromPreset(textSize);

    try {
      setLoading(true);
      const text: TextLayer = await addTextLayer(
        memeId,
        {
          content: currentText.trim(),
          xPosition,
          yPosition,
          fontSize,
          fontFamily: MEME_TEXT_DEFAULTS.fontFamily,
          color: MEME_TEXT_DEFAULTS.color,
          strokeColor: MEME_TEXT_DEFAULTS.strokeColor,
          zIndex: textAnchor,
        },
        session.sessionId,
        session.userId || undefined,
      );

      setTexts([...texts, text]);
      setCurrentText('');
    } catch (error) {
      console.error('Error adding text:', error);
      alert("Erreur lors de l'ajout de texte");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!memeId || !session) return;

    if (!session.userId) {
      alert('Votre mème reste disponible 24 h. Créez un compte pour le sauvegarder !');
    }

    try {
      setLoading(true);
      await downloadMeme(memeId, session.sessionId);
    } catch (error) {
      console.error('Download error:', error);
      alert('Erreur lors du téléchargement');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteText = (idx: number) => {
    setTexts(texts.filter((_, i) => i !== idx));
  };

  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <p className="text-sm text-gray-500">Chargement…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <AppHeader />

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <header className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Créateur de mèmes
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Aperçu grand format · texte en direct · export en un clic
          </p>
        </header>

        <input
          id={fileInputId}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          disabled={loading}
          className="sr-only"
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px]">
          {/* Colonne principale : canevas */}
          <div className="min-w-0">
            <MemeCanvas
              imageUrl={image}
              texts={texts}
              previewContent={currentText}
              previewX={previewCoords.xPosition}
              previewY={previewCoords.yPosition}
              previewFontSize={previewFontSize}
              previewAnchor={previewCoords.textAnchor}
              showPreview={showLivePreview}
              uploadInputId={fileInputId}
              loading={loading}
            />
          </div>

          {/* Panneau latéral (style éditeur) */}
          <aside className="flex flex-col gap-4 lg:sticky lg:top-20 lg:self-start">
            <div className="rounded-2xl border border-gray-200/90 bg-white p-4 shadow-sm sm:p-5">
              <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                Outils
              </h2>

              <div className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor={fileInputId}
                    className={`inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 ${
                      loading ? 'pointer-events-none opacity-50' : ''
                    }`}
                  >
                    <svg
                      className="h-4 w-4 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                    {image ? 'Changer l’image' : 'Importer une image'}
                  </label>
                  {loading && (
                    <p className="mt-2 text-center text-xs text-gray-500">
                      Traitement…
                    </p>
                  )}
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <label
                    htmlFor="meme-text-input"
                    className="mb-1.5 block text-xs font-medium text-gray-600"
                  >
                    Texte du mème
                  </label>
                  <input
                    id="meme-text-input"
                    type="text"
                    value={currentText}
                    onChange={(e) => setCurrentText(e.target.value)}
                    placeholder="Ex : QUAND LE CODE COMPPILE..."
                    onKeyDown={(e) => e.key === 'Enter' && handleAddText()}
                    disabled={loading || !memeId}
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 disabled:bg-gray-50"
                    aria-describedby="text-preview-hint"
                  />
                  {image && memeId && (
                    <>
                      <TextStyleControls
                        sizeId={textSize}
                        positionId={textPosition}
                        onSizeChange={setTextSize}
                        onPositionChange={setTextPosition}
                        disabled={loading}
                      />
                      <p
                        id="text-preview-hint"
                        className="text-xs leading-relaxed text-gray-500"
                      >
                        {currentText.trim()
                          ? `Aperçu : taille « ${textSize === 'small' ? 'Petite' : textSize === 'large' ? 'Grande' : 'Moyenne'} », position « ${getPositionLabel(textPosition)} ».`
                          : 'Choisissez taille et position, puis tapez votre texte.'}
                      </p>
                    </>
                  )}
                  <button
                    type="button"
                    onClick={handleAddText}
                    disabled={loading || !memeId || !currentText.trim()}
                    className="mt-3 w-full cursor-pointer rounded-lg bg-blue-600 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Valider le texte
                  </button>
                </div>

                {texts.length > 0 && (
                  <div className="border-t border-gray-100 pt-4">
                    <p className="mb-2 text-xs font-medium text-gray-600">
                      Textes ajoutés ({texts.length})
                    </p>
                    <ul className="max-h-36 space-y-1.5 overflow-y-auto">
                      {texts.map((text, idx) => (
                        <li
                          key={text.id}
                          className="flex items-center justify-between gap-2 rounded-lg bg-gray-50 px-2.5 py-2 text-sm text-gray-800"
                        >
                          <span className="truncate font-medium" title={text.content}>
                            {text.content}
                            <span className="ml-1 text-[10px] font-normal text-gray-400">
                              · {text.fontSize ?? 40}px
                            </span>
                          </span>
                          <button
                            type="button"
                            onClick={() => handleDeleteText(idx)}
                            disabled={loading}
                            className="cursor-pointer shrink-0 rounded-md px-2 py-0.5 text-xs font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-50"
                            aria-label="Supprimer"
                          >
                            ✕
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={handleDownload}
              disabled={loading || !memeId}
              className="cursor-pointer w-full rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Télécharger le mème
            </button>

            {!session.userId ? (
              <Link
                to="/auth/register"
                className="block cursor-pointer rounded-xl border border-amber-200 bg-amber-50 py-2.5 text-center text-sm font-semibold text-amber-900 no-underline transition hover:bg-amber-100"
              >
                Créer un compte · sauvegarde illimitée
              </Link>
            ) : (
              <p className="rounded-xl bg-emerald-50 px-3 py-2.5 text-center text-xs font-medium text-emerald-800">
                Compte connecté — mèmes sauvegardés
              </p>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
};
