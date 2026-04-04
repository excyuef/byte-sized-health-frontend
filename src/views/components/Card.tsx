type Props = {
  id: number
  children: React.ReactNode,
  img: string
  active: boolean
  onClick: (i: number) => void
}

function Card({ id, children, img, onClick }: Props) {

  return (
    <a
      href={`#${id}`}
      onClick={() => onClick(id)}>
      <div
        className="bg-linear-to-b from-(#6E9EED) to-(--primary-white) from-60%
      shadow-xl md:h-60 md:w-56 h-40 w-38  rounded-3xl flex flex-col 
      items-center gap-6 justify-center"
        data-aos="zoom-out"
      >
        <img
          src={img}
          alt="gejala"
          className="md:h-38 h-24 object-cover" />

        <span
          className="text-(--primary-black) lg:text-lg font-medium">
          {children}
        </span>
      </div>
    </a>
  )
}

export default Card
