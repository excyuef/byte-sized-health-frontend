import React, { useState } from "react";
import SliderInput from "./SliderInput";
import SelectInput from "./SelectInput";
import RadioGroup from "./RadioInput";
import type {
  CheckInFormData,
  WorkloadLevel,
  FocusLevel,
} from "@/models/types/DailyCheckIn";

const DEFAULT_VALUES: CheckInFormData = {
  sleepHours: 7,
  workload: "sedang",
  stressLevel: 4,
  mood: 3,
  focus: "sedang",
  fatigue: 4,
};

const WORKLOAD_OPTIONS: { value: WorkloadLevel; label: string }[] = [
  { value: "ringan", label: "Ringan" },
  { value: "sedang", label: "Sedang" },
  { value: "berat", label: "Berat" },
];

const FOCUS_OPTIONS: { value: FocusLevel; label: string }[] = [
  { value: "buruk", label: "Buruk" },
  { value: "sedang", label: "Sedang" },
  { value: "bagus", label: "Bagus" },
];

const MOOD_EMOJIS: Record<number, { emoji: string; label: string }> = {
  1: { emoji: "😞", label: "Buruk" },
  2: { emoji: "😕", label: "Kurang" },
  3: { emoji: "😐", label: "Netral" },
  4: { emoji: "🙂", label: "Baik" },
  5: { emoji: "😄", label: "Luar Biasa" },
};

const STRESS_LABELS: Record<number, string> = {
  1: "Sangat Santai",
  2: "Santai",
  3: "Ringan",
  4: "Cukup",
  5: "Sedang",
  6: "Lumayan Tinggi",
  7: "Tinggi",
  8: "Sangat Tinggi",
  9: "Kritis",
  10: "Burnout",
};

const FATIGUE_LABELS: Record<number, string> = {
  1: "Segar",
  2: "Segar",
  3: "Baik",
  4: "Baik",
  5: "Sedang",
  6: "Sedang",
  7: "Lelah",
  8: "Lelah",
  9: "Sangat Lelah",
  10: "Exhausted",
};

interface ValidationErrors {
  sleepHours?: string;
  stressLevel?: string;
  mood?: string;
  fatigue?: string;
}

function validate(data: CheckInFormData): ValidationErrors {
  const errors: ValidationErrors = {};
  if (data.sleepHours < 0 || data.sleepHours > 12) {
    errors.sleepHours = "Jam tidur harus antara 0–12 jam";
  }
  if (data.stressLevel < 1 || data.stressLevel > 10) {
    errors.stressLevel = "Tingkat stres harus antara 1–10";
  }
  if (data.mood < 1 || data.mood > 5) {
    errors.mood = "Mood harus antara 1–5";
  }
  if (data.fatigue < 1 || data.fatigue > 10) {
    errors.fatigue = "Kelelahan harus antara 1–10";
  }
  return errors;
}

const SectionCard: React.FC<{
  title: string;
  icon: string;
  children: React.ReactNode;
}> = ({ title, icon, children }) => (
  <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="flex items-center gap-2 mb-4">
      <span className="text-lg">{icon}</span>
      <h3 className="font-semibold uppercase tracking-wider">
        {title}
      </h3>
    </div>
    {children}
  </div>
);

const SubmitFeedback: React.FC<{
  data: CheckInFormData;
}>
  = ({
    data,
  }) => {
    const moodInfo = MOOD_EMOJIS[data.mood];

    return (
      <div className="rounded-2xl border border-indigo-100 p-6 text-center animate-fade-in">
        <div className="text-5xl mb-3">{moodInfo.emoji}</div>
        <h3 className="text-xl font-bold text-indigo-700 mb-1">
          Check-in Tersimpan!
        </h3>
        <p className="text-sm text-gray-500 mb-5">
          Data harian kamu berhasil dicatat.
        </p>

        <div className="grid grid-cols-3 gap-3 mb-6 text-left">
          {[
            { label: "Tidur", value: `${data.sleepHours} jam` },
            { label: "Beban Kerja", value: data.workload },
            { label: "Stres", value: `${data.stressLevel}/10` },
            { label: "Mood", value: moodInfo.label },
            { label: "Fokus", value: data.focus },
            { label: "Kelelahan", value: `${data.fatigue}/10` },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-whiterounded-xl p-3 border border-gray-100"
            >
              <p className="text-xs text-gray-400 mb-0.5">
                {item.label}
              </p>
              <p className="text-sm font-semibold text-gray-800 capitalize">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <button
          className="w-full py-2.5 rounded-xl border border-indigo-300 text-indigo-600 text-sm font-medium hover:bg-indigo-50 transition-all duration-200"
        >
          Check-in Baru
        </button>
      </div>
    );
  };

const DailyCheckIn: React.FC = () => {
  const [form, setForm] = useState<CheckInFormData>(DEFAULT_VALUES);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const updateField = <K extends keyof CheckInFormData>(
    key: K,
    value: CheckInFormData[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const handleSubmit = async () => {
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));

    console.table(form);

    setSubmitting(false);
    setSubmitted(true);
  };

  const today = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen flex items-start justify-center py-10 px-4">
      <div className="w-full max-w-xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-100 mb-4">
            <span className="text-2xl">📋</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Daily Check-in
          </h1>
          <p className="text-sm text-gray-900 capitalize">{today}</p>
        </div>

        {submitted ? (
          <SubmitFeedback data={form} />
        ) : (
          <div className="flex flex-col gap-4">
            <SectionCard title="Tidur" icon="🌙">
              <SliderInput
                id="sleep-hours"
                label="Berapa jam kamu tidur semalam?"
                min={0}
                max={12}
                value={form.sleepHours}
                onChange={(value) => updateField("sleepHours", value)}
                displayValue={(value) => `${value} jam`}
                showNumberInput
              />
              {errors.sleepHours && (
                <p className="mt-1.5 text-xs text-red-500">{errors.sleepHours}</p>
              )}
            </SectionCard>

            <SectionCard title="Beban Kerja" icon="💼">
              <RadioGroup<WorkloadLevel>
                id="workload"
                label="Seberapa berat pekerjaan hari ini?"
                value={form.workload}
                options={WORKLOAD_OPTIONS}
                onChange={(value) => updateField("workload", value)}
              />
            </SectionCard>

            <SectionCard title="Tingkat Stres" icon="🧠">
              <SliderInput
                id="stress-level"
                label="Seberapa stres kamu saat ini?"
                min={1}
                max={10}
                value={form.stressLevel}
                onChange={(value) => updateField("stressLevel", value)}
                displayValue={(value) => `${value} — ${STRESS_LABELS[value]}`}
              />
              {errors.stressLevel && (
                <p className="mt-1.5 text-xs text-red-500">{errors.stressLevel}</p>
              )}
            </SectionCard>

            <SectionCard title="Mood" icon="😊">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-end px-1">
                  {Object.entries(MOOD_EMOJIS).map(([key, { emoji, label }]) => {
                    const isActive = form.mood === Number(key);
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => updateField("mood", Number(key))}
                        className={`flex flex-col items-center gap-1 
                          transition-all duration-200 rounded-xl p-2 ${isActive
                            ? "scale-110 bg-indigo-50"
                            : "opacity-50 hover:opacity-80 hover:scale-105"
                          }`}
                        title={label}
                      >
                        <span className="text-2xl">{emoji}</span>
                        <span
                          className={`text-[10px] font-medium ${isActive
                            ? "text-indigo-600"
                            : "text-gray-400"
                            }`}
                        >
                          {label}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <SliderInput
                  id="mood-slider"
                  label=""
                  min={1}
                  max={5}
                  value={form.mood}
                  onChange={(value) => updateField("mood", value)}
                />
              </div>
              {errors.mood && (
                <p className="mt-1.5 text-xs text-red-500">{errors.mood}</p>
              )}
            </SectionCard>

            <SectionCard title="Fokus & Konsentrasi" icon="🎯">
              <SelectInput<FocusLevel>
                id="focus"
                label="Bagaimana tingkat fokusmu hari ini?"
                value={form.focus}
                options={FOCUS_OPTIONS}
                onChange={(value) => updateField("focus", value)}
              />
            </SectionCard>

            <SectionCard title="Kelelahan" icon="⚡">
              <SliderInput
                id="fatigue"
                label="Seberapa lelah kamu sekarang?"
                min={1}
                max={10}
                value={form.fatigue}
                onChange={(value) => updateField("fatigue", value)}
                displayValue={(value) => `${value} — ${FATIGUE_LABELS[value]}`}
              />
              {errors.fatigue && (
                <p className="mt-1.5 text-xs text-red-500">{errors.fatigue}</p>
              )}
            </SectionCard>

            <button
              onClick={handleSubmit}
              disabled={submitting}
              className={`w-full py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200
                ${submitting
                  ? "bg-indigo-300 cursor-not-allowed text-white"
                  : "bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white shadow-sm hover:shadow-indigo-200"
                }`}
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Menyimpan...
                </span>
              ) : (
                "Simpan Check-in Hari Ini"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyCheckIn;
