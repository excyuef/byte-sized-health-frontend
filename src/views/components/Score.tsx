// import clsx from "clsx"


type ScoreProps = {
  title: string
  score: number | string
  status: string | number
  isBurnout?: boolean
}

function Score({ title, score, status, isBurnout }: ScoreProps) {
  return (
    <div className="flex flex-col gap-1 mt-32">
      <span>{title}</span>

      {isBurnout ? (
        <>
          <div className="text-xl font-bold">
            {status}
          </div>
          <span>
            Skor {score}/100
          </span>
        </>
      ) : (
        <>
          <div className="text-xl font-bold">
            {score}
          </div>
          <span>
            {status}
          </span>
        </>
      )}
    </div>
  )
}

export default Score
