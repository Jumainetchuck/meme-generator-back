// frontend/src/pages/MemeEditor.tsx

import React, { useState, useEffect, useCallback } from 'react';
import { useSessionStore } from '../stores/sessionStore';
import { createMeme, addTextLayer } from '../services/memeService';
import { uploadImage, downloadMeme } from '../services/mediaService';
import type { TextLayer, Meme } from '../types/dtos';
import './MemeEditor.css';

export const MemeEditor: React.FC = () => {
  const { session, initializeSession } = useSessionStore();
  const [image, setImage] = useState<string | null>(null);
  const [memeId, setMemeId] = useState<number | null>(null);
  const [texts, setTexts] = useState<TextLayer[]>([]);
  const [currentText, setCurrentText] = useState('');
  const [loading, setLoading] = useState(false);

  // ✅ useCallback pour éviter les boucles infinies
  const handleInit = useCallback(() => {
    initializeSession();
  }, [initializeSession]);

  // ✅ Ajouter handleInit aux dépendances
  useEffect(() => {
    handleInit();
  }, [handleInit]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // ✅ Vérifier que session existe
    if (!session) {
      alert('Session not initialized. Refresh the page.');
      return;
    }

    try {
      setLoading(true);
      // Upload image
      const imageUrl = await uploadImage(file, session.sessionId);
      setImage(imageUrl);

      // Créer meme
      const meme: Meme = await createMeme(
        { title: `Meme ${Date.now()}`, imageUrl },
        session.sessionId,
        session.userId || undefined // ✅ Convertir null en undefined
      );
      setMemeId(meme.id);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Erreur lors du téléchargement de l\'image');
    } finally {
      setLoading(false);
    }
  };

  const handleAddText = async () => {
    if (!memeId || !currentText || !session) return;

    try {
      setLoading(true);
      const text: TextLayer = await addTextLayer(
        memeId,
        {
          content: currentText,
          xPosition: 50,
          yPosition: 100 + texts.length * 80,
          fontSize: 40,
          fontFamily: 'impact',
          color: '#FFFFFF',
          strokeColor: '#000000',
        },
        session.sessionId,
        session.userId || undefined
      );

      setTexts([...texts, text]);
      setCurrentText('');
    } catch (error) {
      console.error('Error adding text:', error);
      alert('Erreur lors de l\'ajout de texte');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!memeId || !session) return;

    if (!session.userId) {
      alert('💾 Votre meme sera disponible 24h. Créez un compte pour le sauvegarder!');
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

  const handleCreateAccount = () => {
    // Rediriger vers auth
    window.location.href = '/auth/register';
  };

  // ✅ Gérer le cas où session est null
  if (!session) {
    return <div className="meme-editor">Loading...</div>;
  }

  return (
    <div className="meme-editor">
      <div className="preview">
        {image ? (
          <div className="canvas">
            <img src={image} alt="meme" />
            {texts.map((text, idx) => (
              <div
                key={idx}
                className="text-layer"
                style={{
                  left: `${text.xPosition}px`,
                  top: `${text.yPosition}px`,
                  fontSize: `${text.fontSize}px`,
                  color: text.color,
                  textShadow: `2px 2px 0 ${text.strokeColor}`,
                  fontFamily: text.fontFamily,
                }}
              >
                {text.content}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ color: '#999', textAlign: 'center', padding: '40px' }}>
            Upload an image to start
          </div>
        )}
      </div>

      <div className="controls">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          disabled={loading}
        />

        <div className="text-control">
          <input
            type="text"
            value={currentText}
            onChange={(e) => setCurrentText(e.target.value)}
            placeholder="Add text..."
            onKeyPress={(e) => e.key === 'Enter' && handleAddText()}
            disabled={loading}
          />
          <button onClick={handleAddText} disabled={loading || !memeId}>
            Add Text
          </button>
        </div>

        {texts.length > 0 && (
          <div style={{ fontSize: '14px', color: '#666' }}>
            {texts.map((text, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                <span>{text.content}</span>
                <button
                  onClick={() => handleDeleteText(idx)}
                  style={{ padding: '2px 8px', fontSize: '12px' }}
                  disabled={loading}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        <button onClick={handleDownload} className="download-btn" disabled={loading || !memeId}>
          ⬇️ Download Meme
        </button>

        {!session.userId && (
          <button onClick={handleCreateAccount} className="auth-btn" disabled={loading}>
            📝 Create Account to Save
          </button>
        )}

        {session.userId && (
          <div className="user-info">
            ✅ Logged in - Your memes are saved!
          </div>
        )}
      </div>
    </div>
  );
};