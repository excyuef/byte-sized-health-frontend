type InsightCardProps = {
  title: string
  value: string | number
  message: string
  hint?: string
  color?: 'red' | 'yellow' | 'green'
}

export default function InsightCard({
  title,
  value,
  message,
  hint
}: InsightCardProps) {
  return (
    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-xl w-full">
      <div className="flex items-start gap-2">
        <span className="w-2 h-2 mt-2 rounded-full bg-red-500"></span>

        <div>
          <p className="text-sm">
            <span className="font-semibold">
              {title} {value}
            </span>{" "}
            {message}
          </p>

          <p className="text-xs text-zinc-400 mt-1">
            {hint}
          </p>
        </div>
      </div>
    </div>
  )
}
