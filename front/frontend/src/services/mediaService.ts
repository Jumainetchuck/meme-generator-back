// frontend/src/services/mediaService.ts

export const uploadImage = async (file: File, sessionId: string) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('sessionId', sessionId);

  const response = await fetch('http://localhost:5554/api/media/upload', {
    method: 'POST',
    body: formData,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken') || ''}`,
    },
  });

  const data = await response.json();
  return data.url; // URL stockée dans S3/local
};

export const downloadMeme = async (memeId: number, sessionId: string) => {
  const response = await fetch(
    `http://localhost:5550/api/media/download/${memeId}`,
    {
      headers: {
        'X-Session-Id': sessionId,
        'Authorization': `Bearer ${localStorage.getItem('authToken') || ''}`,
      },
    }
  );

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `meme_${memeId}.png`;
  a.click();
};