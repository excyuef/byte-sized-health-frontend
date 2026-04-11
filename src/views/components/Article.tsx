import { NavLink } from "react-router"

type ArticleProps = {
  title: string
  source: string
  url: string
  img: string
}

function Article({ title, source, url, img }: ArticleProps) {
  return (
    <div
      className="p-4 bg-(--primary-color-2) rounded-xl flex gap-4 shadow-2xl"
      data-aos="zoom-in">
      <div>
        <img
          src={img}
          alt="gambar artikel"
          className="w-32 aspect-square object-cover rounded-xl" />
      </div>
      <div
        className="flex flex-col justify-center gap-2 text-white">
        <NavLink
          to={url}
          className="text-xl font-semibold">
          {title}
        </NavLink>
        <span>
          Sumber/Source: {source}
        </span>
      </div>
    </div>
  )
}

export default Article
