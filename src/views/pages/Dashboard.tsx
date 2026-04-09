import Score from "@/views/components/Score"
import Chart from "@/views/components/Chart"
import InsightCard from '@/views/components/InsightCard'

function Dashboard() {
  return (
    <div
      className="mb-500 mt-32 flex flex-col gap-4">
      <div
        className="grid grid-cols-3 gap-4">
        <Score
          title="Burnout Risk"
          value={74}
          status="Tinggi"
          type="percentage100"
        />

        <Score
          title="Jam Tidur"
          value={5}
          status="Kurang"
          type="duration"
        />

        <Score
          title="Beban Kerja"
          value="Berat"
          status="Tinggi"
          type="label"
        />

        <Score
          title="Stress"
          value={5}
          status="Sedang"
          type="percentage10"
        />

        <Score
          title="Mood"
          value={3}
          status="Sedang"
          type="percentage10"
        />

        <Score
          title="Kelelahan"
          value={5}
          status="Sedang"
          type="percentage10"
        />

      </div>
      <div
        className="grid grid-cols-3 gap-4">
        <Chart />

        <div
          className="flex flex-col gap-2">
          <InsightCard
            title="Tidur"
            value="5 jam"
            message="jauh dari cukup — coba tidur sebelum pukul 22.00."
            hint="Target minimal 7 jam/malam"
          />

          <InsightCard
            title="Beban Kerja"
            value="Berat"
            message="Beban kerja lagi tinggi — coba bagi tugas jadi bagian kecil biar ga kewalahan."
            hint="Target minimal Lumayan"
          />

        </div>
      </div>
    </div>
  )
}

export default Dashboard
