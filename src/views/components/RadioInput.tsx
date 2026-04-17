import React from "react";
import type { RadioGroupProps } from "@/models/types/DailyCheckIn";
import clsx from 'clsx'

function RadioGroup<T extends string>({
  id,
  label,
  value,
  options,
  onChange,
}: RadioGroupProps<T>): React.ReactElement {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-900">
        {label}
      </span>
      <div className="flex gap-3 flex-wrap" role="radiogroup" aria-label={label}>
        {options.map((opt) => {
          const isSelected = value === opt.value;
          return (
            <label
              key={opt.value}
              className={clsx(
                "relative flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border cursor-pointer text-sm font-medium transition-all duration-200 select-none",
                isSelected && value === "ringan"
                  ? "border-green-300 bg-green-50 text-green-600 shadow-sm"
                  : isSelected && value === "sedang"
                    ? "border-yellow-300 bg-yellow-50 text-yellow-600 shadow-sm"

                    : isSelected && value === "berat"
                      ? "border-red-300 bg-red-50 text-red-600 shadow-sm"
                      : "border-gray-200 text-gray-600 hover:border-indigo-300 hover:bg-indigo-50/50"
              )}
            >
              <input
                type="radio"
                name={id}
                value={opt.value}
                checked={isSelected}
                onChange={() => onChange(opt.value)}
                className="sr-only"
              />
              {isSelected && (
                <span className={clsx(value === "ringan"
                  ? "bg-green-500"
                  : value === "sedang"
                    ? "bg-yellow-500"
                    : "bg-red-500", "w-2 h-2 rounded-full flex-shrink-0")} />
              )}
              {opt.label}
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default RadioGroup;
