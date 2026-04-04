import type { PropsWithChildren } from "react"

function ExplainList({ children }: PropsWithChildren) {
  return (
    <li
      className="list-none flex items-center gap-2">
      <span className="text-4xl text-(--primary-color-2)">•</span>
      <span>
        {children}
      </span>
    </li>
  )
}

export default ExplainList
