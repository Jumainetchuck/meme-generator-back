// frontend/src/services/memeService.ts

import type { CreateMemeDto, CreateTextLayerDto } from "../types/dtos";
import { API_GATEWAY } from '../config/api';

export const createMeme = async (data: CreateMemeDto, sessionId: string, userId?: number) => {
  const payload = {
    ...data,
    userId: userId || undefined,
    sessionId: !userId ? sessionId : undefined,
  };

  const response = await fetch(`${API_GATEWAY}/api/memes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Session-Id': sessionId,
      'Authorization': `Bearer ${localStorage.getItem('authToken') || ''}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to create meme');
  }

  return response.json();
};

export const addTextLayer = async (
  memeId: number,
  textData: CreateTextLayerDto,
  sessionId: string,
  userId?: number
) => {
  const payload = {
    ...textData,
    userId: userId || undefined,
    sessionId: !userId ? sessionId : undefined,
  };

  const response = await fetch(
    `${API_GATEWAY}/api/memes/${memeId}/text-layers`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Session-Id': sessionId,
        'Authorization': `Bearer ${localStorage.getItem('authToken') || ''}`,
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to add text layer');
  }

  return response.json();
};