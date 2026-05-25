// frontend/src/services/memeService.ts

import type { CreateMemeDto, CreateTextLayerDto } from "../types/dtos";


export const createMeme = async (data: CreateMemeDto, sessionId: string, userId?: number) => {
  const payload = {
    ...data,
    userId: userId || undefined,
    sessionId: !userId ? sessionId : undefined,
  };

  const response = await fetch('http://localhost:5553/api/memes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken') || ''}`,
    },
    body: JSON.stringify(payload),
  });

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
    `http://localhost:5550/api/memes/${memeId}/text-layers`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken') || ''}`,
      },
      body: JSON.stringify(payload),
    }
  );

  return response.json();
};