import clsx from 'clsx'

type Props = {
  id: number
  children: React.ReactNode,
  img: string
  active: boolean
  onClick: (i: number) => void
}

function Card({ id, children, img, active, onClick }: Props) {

  return (
    <a
      href={`#${id}`}
      onClick={() => onClick(id)}>
      <div
        className={clsx(active ? "border-(--primary-color-2) border-4" : "border-0", "bg-linear-to-b from-(#6E9EED) to-(--primary-white) from-60% shadow-xl md:h-58 md:w-54 h-46 w-42 rounded-3xl flex flex-col items-center gap-6 justify-center")}
        data-aos="zoom-out"
      >
        <img
          src={img}
          alt="gejala"
          className="md:h-38 h-24 object-cover" />

        <span
          className="text-(--primary-black) lg:text-lg">
          {children}
        </span>
      </div>
    </a>
  )
}

export default Card
