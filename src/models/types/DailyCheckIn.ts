export type WorkloadLevel = "ringan" | "sedang" | "berat";
export type FocusLevel = "buruk" | "sedang" | "bagus";

export interface CheckInFormData {
  sleepHours: number;
  workload: WorkloadLevel;
  stressLevel: number;
  mood: number;
  focus: FocusLevel;
  fatigue: number;
}

export interface SliderInputProps {
  id: string;
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  displayValue?: (val: number) => string;
  showNumberInput?: boolean;
  colorClass?: string;
}

export interface SelectInputProps<T extends string> {
  id: string;
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
}

export interface RadioGroupProps<T extends string> {
  id: string;
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
}
