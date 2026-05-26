/** Coordonnées de référence (alignées sur MemeCanvas) */
export const CANVAS_REF_WIDTH = 500;
export const CANVAS_REF_HEIGHT = 400;

export type TextSizeId = 'small' | 'medium' | 'large';

export type TextPositionId =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'middle-left'
  | 'middle'
  | 'middle-right'
  | 'bottom-left'
  | 'bottom'
  | 'bottom-right';

/** 0 = gauche, 1 = centré, 2 = droite (stocké dans zIndex en base) */
export type TextAnchor = 0 | 1 | 2;

export const TEXT_SIZE_OPTIONS: {
  id: TextSizeId;
  label: string;
  hint: string;
  fontSize: number;
}[] = [
  { id: 'small', label: 'Petite', hint: 'Discrète', fontSize: 28 },
  { id: 'medium', label: 'Moyenne', hint: 'Classique', fontSize: 40 },
  { id: 'large', label: 'Grande', hint: 'Impact', fontSize: 56 },
];

export const TEXT_POSITION_OPTIONS: {
  id: TextPositionId;
  label: string;
  shortLabel: string;
}[] = [
  { id: 'top-left', label: 'Haut gauche', shortLabel: '↖' },
  { id: 'top', label: 'Haut', shortLabel: '↑' },
  { id: 'top-right', label: 'Haut droite', shortLabel: '↗' },
  { id: 'middle-left', label: 'Milieu gauche', shortLabel: '←' },
  { id: 'middle', label: 'Milieu', shortLabel: '●' },
  { id: 'middle-right', label: 'Milieu droite', shortLabel: '→' },
  { id: 'bottom-left', label: 'Bas gauche', shortLabel: '↙' },
  { id: 'bottom', label: 'Bas', shortLabel: '↓' },
  { id: 'bottom-right', label: 'Bas droite', shortLabel: '↘' },
];

export function getFontSizeFromPreset(sizeId: TextSizeId): number {
  return TEXT_SIZE_OPTIONS.find((s) => s.id === sizeId)?.fontSize ?? 40;
}

export function getTextAnchorFromZIndex(zIndex?: number): TextAnchor {
  if (zIndex === 1) return 1;
  if (zIndex === 2) return 2;
  return 0;
}

export function getPositionCoords(
  positionId: TextPositionId,
  refW = CANVAS_REF_WIDTH,
  refH = CANVAS_REF_HEIGHT,
): { xPosition: number; yPosition: number; textAnchor: TextAnchor } {
  const m = 20;
  const bottomOffset = 56;

  const map: Record<
    TextPositionId,
    { xPosition: number; yPosition: number; textAnchor: TextAnchor }
  > = {
    'top-left': { xPosition: m, yPosition: m, textAnchor: 0 },
    top: { xPosition: refW / 2, yPosition: m, textAnchor: 1 },
    'top-right': { xPosition: refW - m, yPosition: m, textAnchor: 2 },
    'middle-left': { xPosition: m, yPosition: refH / 2 - 24, textAnchor: 0 },
    middle: { xPosition: refW / 2, yPosition: refH / 2 - 24, textAnchor: 1 },
    'middle-right': {
      xPosition: refW - m,
      yPosition: refH / 2 - 24,
      textAnchor: 2,
    },
    'bottom-left': {
      xPosition: m,
      yPosition: refH - bottomOffset,
      textAnchor: 0,
    },
    bottom: {
      xPosition: refW / 2,
      yPosition: refH - bottomOffset,
      textAnchor: 1,
    },
    'bottom-right': {
      xPosition: refW - m,
      yPosition: refH - bottomOffset,
      textAnchor: 2,
    },
  };

  return map[positionId];
}

export function getPositionLabel(positionId: TextPositionId): string {
  return TEXT_POSITION_OPTIONS.find((p) => p.id === positionId)?.label ?? positionId;
}
