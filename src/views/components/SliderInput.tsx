import React from "react";
import type { SliderInputProps } from "@/models/types/DailyCheckIn";

const SliderInput: React.FC<SliderInputProps> = ({
  id,
  label,
  min,
  max,
  value,
  onChange,
  displayValue,
  showNumberInput = false,
  colorClass = "accent-indigo-500",
}) => {
  const display = displayValue ? displayValue(value) : String(value);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = Number(e.target.value);
    if (!isNaN(parsed)) {
      onChange(Math.min(max, Math.max(min, parsed)));
    }
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-900"
        >
          {label}
        </label>
        <div className="flex items-center gap-2">
          {showNumberInput ? (
            <input
              type="number"
              min={min}
              max={max}
              value={value}
              onChange={handleNumberChange}
              className="w-16 text-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white text-gray-900 py-1 px-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          ) : (
            <span className="min-w-[2.5rem] text-center rounded-lg bg-indigo-50 text-indigo-700 font-semibold px-2 py-1 transition-all duration-200">
              {display}
            </span>
          )}
        </div>
      </div>

      <div className="relative flex items-center">
        <div className="relative w-full h-2 rounded-full bg-gray-200 overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-indigo-500 transition-all duration-150"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleSliderChange}
          className={`absolute w-full h-2 appearance-none bg-transparent cursor-pointer ${colorClass} 
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-5 
            [&::-webkit-slider-thumb]:h-5 
            [&::-webkit-slider-thumb]:rounded-full 
            [&::-webkit-slider-thumb]:bg-white 
            [&::-webkit-slider-thumb]:border-2 
            [&::-webkit-slider-thumb]:border-indigo-500 
            [&::-webkit-slider-thumb]:shadow-sm
            [&::-webkit-slider-thumb]:transition-transform
            [&::-webkit-slider-thumb]:hover:scale-110
            [&::-moz-range-thumb]:w-5 
            [&::-moz-range-thumb]:h-5 
            [&::-moz-range-thumb]:rounded-full 
            [&::-moz-range-thumb]:bg-white 
            [&::-moz-range-thumb]:border-2 
            [&::-moz-range-thumb]:border-indigo-500
            [&::-moz-range-thumb]:cursor-pointer`}
        />
      </div>

      <div className="flex justify-between text-xs text-gray-400 px-0.5">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default SliderInput;
