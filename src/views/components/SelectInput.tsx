import React from "react";
import type { SelectInputProps } from "@/models/types/DailyCheckIn";

function SelectInput<T extends string>({
  id,
  label,
  value,
  options,
  onChange,
}: SelectInputProps<T>): React.ReactElement {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as T);
  };

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={handleChange}
          className="w-full appearance-none rounded-xl border border-gray-200 bg-white text-gray-900 py-2.5 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition cursor-pointer hover:border-indigo-300 "
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            className="h-4 w-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SelectInput;
