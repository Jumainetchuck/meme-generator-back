import { API_GATEWAY, mediaUrl } from '../config/api';

export const uploadImage = async (file: File, sessionId: string) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('sessionId', sessionId);

  const response = await fetch(`${API_GATEWAY}/api/media/upload`, {
    method: 'POST',
    body: formData,
    headers: {
      'X-Session-Id': sessionId,
      Authorization: `Bearer ${localStorage.getItem('authToken') || ''}`,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(
      (error as { message?: string }).message || 'Échec du téléversement',
    );
  }

  const data = (await response.json()) as { url: string };
  return mediaUrl(data.url);
};

export const downloadMeme = async (memeId: number, sessionId: string) => {
  const response = await fetch(
    `${API_GATEWAY}/api/media/download/${memeId}`,
    {
      headers: {
        'X-Session-Id': sessionId,
        Authorization: `Bearer ${localStorage.getItem('authToken') || ''}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error('Échec du téléchargement du mème');
  }

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `meme_${memeId}.png`;
  a.click();
  window.URL.revokeObjectURL(url);
};
