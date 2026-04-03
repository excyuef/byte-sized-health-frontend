import type { PropsWithChildren } from "react"

function Card({ children }: PropsWithChildren) {
  return (
    <div
      className="bg-linear-to-b from-(#6E9EED) to-(--primary-white) from-60%
      shadow-xl md:h-64 md:w-52 h-40 w-38  rounded-3xl flex flex-col 
      items-center gap-6 justify-center"
      data-aos="zoom-out">
      <img
        src="src/assets/elemen/1.png"
        alt="gejala"
        className="md:h-38 h-24 object-cover" />

      <span
        className="text-(--primary-black) lg:text-xl font-medium">
        {children}
      </span>
    </div>
  )
}

export default Card
