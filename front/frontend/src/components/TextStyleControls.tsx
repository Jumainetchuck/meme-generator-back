import type { TextPositionId, TextSizeId } from '../config/memeTextOptions';
import {
  TEXT_POSITION_OPTIONS,
  TEXT_SIZE_OPTIONS,
} from '../config/memeTextOptions';

type TextStyleControlsProps = {
  sizeId: TextSizeId;
  positionId: TextPositionId;
  onSizeChange: (id: TextSizeId) => void;
  onPositionChange: (id: TextPositionId) => void;
  disabled?: boolean;
};

export function TextStyleControls({
  sizeId,
  positionId,
  onSizeChange,
  onPositionChange,
  disabled,
}: TextStyleControlsProps) {
  return (
    <div className="flex flex-col gap-4">
      <fieldset disabled={disabled} className="disabled:opacity-50">
        <legend className="mb-2 text-xs font-medium text-gray-600">
          Taille des caractères
        </legend>
        <div className="grid grid-cols-3 gap-2">
          {TEXT_SIZE_OPTIONS.map((opt) => {
            const selected = sizeId === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onSizeChange(opt.id)}
                className={`cursor-pointer rounded-xl border px-2 py-2.5 text-center transition ${
                  selected
                    ? 'border-blue-500 bg-blue-50 text-blue-800 ring-2 ring-blue-500/30'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                }`}
                aria-pressed={selected}
              >
                <span className="block text-sm font-bold">{opt.label}</span>
                <span className="mt-0.5 block text-[10px] text-gray-500">
                  {opt.hint}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset disabled={disabled} className="disabled:opacity-50">
        <legend className="mb-2 text-xs font-medium text-gray-600">
          Position sur l’image
        </legend>
        <div
          className="grid grid-cols-3 gap-1.5 rounded-xl border border-gray-200 bg-gray-50/80 p-2"
          role="group"
          aria-label="Position du texte"
        >
          {TEXT_POSITION_OPTIONS.map((opt) => {
            const selected = positionId === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                title={opt.label}
                onClick={() => onPositionChange(opt.id)}
                className={`cursor-pointer flex min-h-[44px] flex-col items-center justify-center rounded-lg border text-xs font-semibold transition ${
                  selected
                    ? 'border-blue-500 bg-blue-600 text-white shadow-sm'
                    : 'border-transparent bg-white text-gray-600 hover:border-gray-200 hover:bg-gray-100'
                }`}
                aria-pressed={selected}
                aria-label={opt.label}
              >
                <span className="text-base leading-none">{opt.shortLabel}</span>
                <span
                  className={`mt-1 hidden text-[9px] font-medium sm:block ${
                    selected ? 'text-blue-100' : 'text-gray-400'
                  }`}
                >
                  {opt.label.split(' ').slice(-1)[0]}
                </span>
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-center text-[11px] text-gray-500">
          Ex. « Bas » = légende en bas du mème, comme sur les classiques
        </p>
      </fieldset>
    </div>
  );
}
