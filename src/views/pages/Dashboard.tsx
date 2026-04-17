import Score from "@/views/components/Score";
import Chart from "@/views/components/Chart";
import InsightCard from "@/views/components/InsightCard";
import type React from "react";

import { NavLink } from "react-router";

type ScoreType =
  "percentage100" | "percentage10" | "duration" | "label";

interface ScoreItem {
  title: string;
  value: number | string;
  status: "Tinggi" | "Sedang" | "Kurang";
  type: ScoreType;
}

interface InsightItem {
  title: string;
  value: string;
  message: string;
  hint: string;
}

const scores: ScoreItem[] = [
  { title: "Burnout Risk", value: 74, status: "Tinggi", type: "percentage100" },
  { title: "Jam Tidur", value: 5, status: "Kurang", type: "duration" },
  { title: "Beban Kerja", value: "Berat", status: "Tinggi", type: "label" },
  { title: "Stress", value: 5, status: "Sedang", type: "percentage10" },
  { title: "Mood", value: 3, status: "Sedang", type: "percentage10" },
  { title: "Kelelahan", value: 5, status: "Sedang", type: "percentage10" },
];

const insights: InsightItem[] = [
  {
    title: "Tidur",
    value: "5 jam",
    message: "jauh dari cukup — coba tidur sebelum pukul 22.00.",
    hint: "Target minimal 7 jam/malam",
  },
  {
    title: "Beban Kerja",
    value: "Berat",
    message:
      "Beban kerja lagi tinggi — coba bagi tugas jadi bagian kecil biar ga kewalahan.",
    hint: "Target minimal Lumayan",
  },
];

function formatDate() {
  const now = new Date();

  const tanggal = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(now);

  const jam = now.getHours();

  let sapaan = "Selamat malam";
  if (jam >= 5 && jam < 12) sapaan = "Selamat pagi";
  else if (jam >= 12 && jam < 15) sapaan = "Selamat siang";
  else if (jam >= 15 && jam < 18) sapaan = "Selamat sore";

  return `${tanggal} · ${sapaan}`;
}

const CheckIn: React.FC = () => (
  <div className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl">

    <div className="flex flex-col">
      <h1 className="text-lg font-semibold">Byte-Sized Health</h1>
      <p className="text-sm text-gray-300">
        {formatDate()}, Rhafi
      </p>
    </div>

    <NavLink className="border border-gray-400 px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition"
      to="/checkin"
      end>
      + Check-in Hari Ini
    </NavLink>

  </div>
)

function Dashboard() {
  return (
    <div className="mt-32 flex flex-col gap-4">
      <CheckIn />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {scores.map((item, i) => (
          <Score key={i} {...item} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        <div className="lg:col-span-2">
          <Chart />
        </div>

        <div className="flex flex-col gap-2">
          {insights.map((item, i) => (
            <InsightCard key={i} {...item} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
