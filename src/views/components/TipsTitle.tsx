import type { PropsWithChildren } from "react"

function Title({ children }: PropsWithChildren) {
  return (
    <div
      className="bg-(--primary-color-1) mt-24 w-28 p-2 rounded-xl shadow-2xl
      shadow-white flex justify-center">
      <h1
        className="text-(--primary-color-2) font-semibold text-xl">
        {children}
      </h1>
    </div>
  )
}

export default Title
