import { useCallback, useEffect, useRef, useState } from 'react';
import { MemeTextOverlay } from './MemeTextOverlay';
import {
  CANVAS_REF_HEIGHT,
  CANVAS_REF_WIDTH,
} from '../config/memeTextOptions';
import type { TextLayer } from '../types/dtos';
import type { TextAnchor } from '../config/memeTextOptions';

export const CANVAS_REFERENCE_WIDTH = CANVAS_REF_WIDTH;

type MemeCanvasProps = {
  imageUrl: string | null;
  texts: TextLayer[];
  previewContent?: string;
  previewX?: number;
  previewY?: number;
  previewFontSize?: number;
  previewAnchor?: TextAnchor;
  showPreview?: boolean;
  uploadInputId?: string;
  loading?: boolean;
};

export function MemeCanvas({
  imageUrl,
  texts,
  previewContent,
  previewX = 50,
  previewY = 100,
  previewFontSize = 40,
  previewAnchor = 1,
  showPreview = false,
  uploadInputId,
  loading,
}: MemeCanvasProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [displayWidth, setDisplayWidth] = useState(CANVAS_REF_WIDTH);
  const [displayHeight, setDisplayHeight] = useState(CANVAS_REF_HEIGHT);

  const updateScale = useCallback(() => {
    if (imgRef.current) {
      setDisplayWidth(imgRef.current.clientWidth);
      setDisplayHeight(imgRef.current.clientHeight);
    }
  }, []);

  const scaleX = displayWidth / CANVAS_REF_WIDTH;
  const scaleY = displayHeight / CANVAS_REF_HEIGHT;

  useEffect(() => {
    const img = imgRef.current;
    if (!img || !imageUrl) return;

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(img);
    return () => observer.disconnect();
  }, [imageUrl, updateScale]);

  return (
    <section
      className="relative flex w-full min-h-[min(75vh,720px)] items-center justify-center overflow-hidden rounded-2xl bg-[#0f1117] shadow-inner ring-1 ring-white/10"
      aria-label="Zone de prévisualisation du mème"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #fff 25%, transparent 25%),
            linear-gradient(-45deg, #fff 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #fff 75%),
            linear-gradient(-45deg, transparent 75%, #fff 75%)
          `,
          backgroundSize: '18px 18px',
          backgroundPosition: '0 0, 0 9px, 9px -9px, -9px 0',
        }}
      />

      {!imageUrl ? (
        <div className="relative z-10 flex max-w-md flex-col items-center gap-5 px-6 py-12 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
            <svg
              className="h-10 w-10 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <p className="text-lg font-semibold text-white">Votre mème apparaîtra ici</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Grande zone de prévisualisation — importez une image pour commencer
            </p>
          </div>
          {uploadInputId && (
            <label
              htmlFor={uploadInputId}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-500 ${
                loading ? 'pointer-events-none opacity-60' : ''
              }`}
            >
              Choisir une image
            </label>
          )}
        </div>
      ) : (
        <div className="relative z-10 w-full max-w-4xl px-4 py-6 sm:px-8 sm:py-8">
          <div className="relative mx-auto w-full">
            <img
              ref={imgRef}
              src={imageUrl}
              alt="Aperçu du mème"
              onLoad={updateScale}
              className="block w-full max-h-[min(68vh,680px)] rounded-lg object-contain shadow-2xl shadow-black/60"
              draggable={false}
            />
            {texts.map((text) => (
              <MemeTextOverlay
                key={text.id}
                content={text.content}
                xPosition={text.xPosition * scaleX}
                yPosition={text.yPosition * scaleY}
                fontSize={(text.fontSize ?? 40) * scaleX}
                zIndex={text.zIndex}
                fontFamily={text.fontFamily}
                color={text.color}
                strokeColor={text.strokeColor}
                displayWidth={displayWidth}
              />
            ))}
            {showPreview && previewContent && (
              <MemeTextOverlay
                content={previewContent}
                xPosition={previewX * scaleX}
                yPosition={previewY * scaleY}
                fontSize={previewFontSize * scaleX}
                textAnchor={previewAnchor}
                displayWidth={displayWidth}
                isPreview
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
