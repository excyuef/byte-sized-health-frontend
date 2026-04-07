import type { PropsWithChildren } from "react"

function ExplainList({ children }: PropsWithChildren) {
  return (
    <li
      className="list-none flex items-center gap-2"
      data-aos="fade-right"
      data-aos-offset="50"
      data-aos-delay="100">
      <span className="text-4xl text-(--primary-color-2)">•</span>
      <span
        className="text-gray-600">
        {children}
      </span>
    </li>
  )
}

export default ExplainList
