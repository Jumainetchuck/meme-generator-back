export interface CreateMemeDto {
  title: string;
  imageUrl: string;
  userId?: number;
  sessionId?: string;
}

export interface CreateTextLayerDto {
  content: string;
  xPosition: number;
  yPosition: number;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  strokeColor?: string;
  rotation?: number;
  /** 0=gauche, 1=centré, 2=droite (alignement du texte) */
  zIndex?: number;
}

export interface TextLayer extends CreateTextLayerDto {
  id: number;
  memeId: number;
  zIndex?: number;
}

// ✅ Ajouter cette interface
export interface Meme {
  id: number;
  title: string;
  imageUrl: string;
  userId: number | null;
  sessionId: string | null;
  visibility: 'PRIVATE' | 'PUBLIC' | 'TEMPORARY';
  status: 'DRAFT' | 'COMPLETED' | 'DELETED';
  expiresAt: string | null;
  textLayers: TextLayer[];
}