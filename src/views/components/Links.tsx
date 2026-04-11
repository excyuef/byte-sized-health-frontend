import { NavLink } from "react-router";
import clsx from 'clsx'

type Links = {
  title: string
  url: string
  page: string
}

function Links() {
  const link: Links[] = [
    {
      title: 'Beranda',
      url: '/',
      page: "beranda"
    },
    {
      title: 'Artikel & Tips',
      url: 'articles',
      page: "articles and tips"
    }
  ]

  return (
    <ul
      className="flex flex-col lg:flex-row items-center justify-center gap-6">
      {link.map((li, i) => {
        return (
          <div
            data-aos="zoom-in">
            <NavLink
              key={i}
              to={li.url}
              className={({ isActive }) =>
                clsx("transition-all",
                  isActive ? "bg-(--primary-color-2) text-(--primary-white) py-2 px-3 rounded-2xl" : "bg-transparent"
                )
              } end>
              {li.title}
            </NavLink>

          </div>)
      })}
    </ul>
  )
}

export default Links
