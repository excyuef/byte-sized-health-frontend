import Score from "@/views/components/Score"

function Dashboard() {
  return (
    <div
      className="flex gap-8">
      <Score
        title="Burnout Risk"
        score={74}
        status="Tinggi"
        isBurnout
      />

      <Score
        title="Mood Hari Ini"
        score={5}
        status="Sedang"
      />
    </div>
  )
}

export default Dashboard
