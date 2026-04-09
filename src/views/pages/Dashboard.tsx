import Score from "@/views/components/Score"

function Dashboard() {
  return (
    <div
      className="mb-500 mt-32">
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
    </div>
  )
}

export default Dashboard
