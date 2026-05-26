import type { CSSProperties } from 'react';
import type { TextAnchor } from '../config/memeTextOptions';
import { CANVAS_REF_WIDTH, getTextAnchorFromZIndex } from '../config/memeTextOptions';

export const MEME_TEXT_DEFAULTS = {
  fontSize: 40,
  fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif',
  color: '#FFFFFF',
  strokeColor: '#000000',
} as const;

export function memeTextStyle(
  x: number,
  y: number,
  fontSize: number,
  fontFamily: string,
  color: string,
  strokeColor: string,
  textAnchor: TextAnchor,
  displayWidth: number,
  extra?: CSSProperties,
): CSSProperties {
  const base: CSSProperties = {
    top: `${y}px`,
    fontSize: `${fontSize}px`,
    color,
    fontFamily,
    textShadow: `2px 2px 0 ${strokeColor}, -1px -1px 0 ${strokeColor}`,
    maxWidth: `${displayWidth * 0.92}px`,
    ...extra,
  };

  if (textAnchor === 1) {
    return {
      ...base,
      left: `${x}px`,
      transform: 'translateX(-50%)',
      textAlign: 'center',
    };
  }
  if (textAnchor === 2) {
    return {
      ...base,
      left: 'auto',
      right: `${Math.max(8, displayWidth - x)}px`,
      textAlign: 'right',
    };
  }
  return {
    ...base,
    left: `${x}px`,
    textAlign: 'left',
  };
}

type MemeTextOverlayProps = {
  content: string;
  xPosition: number;
  yPosition: number;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  strokeColor?: string;
  zIndex?: number;
  textAnchor?: TextAnchor;
  displayWidth?: number;
  isPreview?: boolean;
};

export function MemeTextOverlay({
  content,
  xPosition,
  yPosition,
  fontSize = MEME_TEXT_DEFAULTS.fontSize,
  fontFamily = MEME_TEXT_DEFAULTS.fontFamily,
  color = MEME_TEXT_DEFAULTS.color,
  strokeColor = MEME_TEXT_DEFAULTS.strokeColor,
  zIndex,
  textAnchor: textAnchorProp,
  displayWidth = CANVAS_REF_WIDTH,
  isPreview = false,
}: MemeTextOverlayProps) {
  const anchor = textAnchorProp ?? getTextAnchorFromZIndex(zIndex);

  return (
    <div
      className={`pointer-events-none absolute font-bold uppercase leading-tight break-words ${
        isPreview
          ? 'z-10 opacity-90 ring-2 ring-blue-400/60 ring-offset-1 rounded-sm'
          : ''
      }`}
      style={memeTextStyle(
        xPosition,
        yPosition,
        fontSize,
        fontFamily,
        color,
        strokeColor,
        anchor,
        displayWidth,
        isPreview ? { outline: '1px dashed rgba(59, 130, 246, 0.5)' } : undefined,
      )}
      aria-hidden={isPreview}
    >
      {content}
    </div>
  );
}
