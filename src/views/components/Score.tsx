// import clsx from "clsx"


type ScoreProps = {
  title: string
  value: number | string
  status: string
  type: "percentage100" | "duration" | "percentage10" | "label"
}

export function Score({ title, value, type, status }: ScoreProps) {
  const renderValue = () => {
    if (type === "duration") {
      return (
        <div className="flex items-end gap-1">
          <span className="text-3xl font-bold text-gray-700">{value}</span>
          <span className="text-sm opacity-70">jam</span>
        </div>
      )
    }

    if (type === "percentage100") {
      return (
        <div className="flex items-end gap-1">
          <span className="text-3xl font-bold text-gray-700">{value}</span>
          <span className="text-sm opacity-70">/100</span>
        </div>
      )
    }

    if (type === "percentage10") {
      return (
        <div className="flex items-end gap-1">
          <span className="text-3xl font-bold text-gray-700">{value}</span>
          <span className="text-sm opacity-70">/10</span>
        </div>
      )
    }

    return <span className="text-3xl font-bold text-gray-700">{value}</span>
  }

  return (
    <div className="bg-(--primary-color-1) p-4 rounded-xl">
      <p className="text-sm opacity-70">
        {title}
      </p>

      <div className="mt-2">
        {renderValue()}
      </div>

      {status && (
        <span className="inline-block mt-2 px-2 py-1 text-xs text-red-900 rounded bg-red-100">
          {status}
        </span>
      )}
    </div>
  )
}

export default Score
