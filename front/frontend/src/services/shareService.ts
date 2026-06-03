import { API_GATEWAY } from '../config/api';

export type SharePlatform = 'facebook' | 'twitter' | 'whatsapp' | 'linkedin' | 'email' | 'copy_link';

export interface ShareResponse {
  id: number;
  memeId: number;
  platform: SharePlatform;
  shareUrl: string;
  socialMediaUrl: string;
}

export const shareMeme = async (
  memeId: number,
  platform: SharePlatform,
  sessionId: string,
  _userId?: number,
  message?: string,
): Promise<ShareResponse> => {
  try {
    const response = await fetch(`${API_GATEWAY}/api/memes/${memeId}/share`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Session-Id': sessionId,
        Authorization: `Bearer ${localStorage.getItem('authToken') || ''}`,
      },
      body: JSON.stringify({
        platform,
        message,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Erreur ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Erreur réseau lors du partage';
    console.error('shareMeme error:', err);
    throw new Error(message, { cause: err });
  }
};

export const openShareLink = (url: string) => {
  window.open(url, '_blank', 'width=600,height=400');
};