import { NavLink } from "react-router";

type Links = {
  title: string
  url: string
  page: string
}

function Links({ page }) {
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
    },
    {
      title: "Ruang Bersama",
      url: "ruang bersama",
      page: "ruang bersama"
    }
  ]

  return (
    <ul
      className="flex flex-col lg:flex-row items-center justify-center gap-6">
      {link.map((li, i) => {
        return (
          <NavLink
            key={i}
            to={li.url}
            className="text-(--primary-color-2) transition hover:text-gray-500/75" end>
            {li.title}
          </NavLink>
        )
      })}

      <li>
        <NavLink
          className="rounded-md bg-(--primary-color-2) px-2 py-1.5 font-medium 
                  text-(--primary-color-1)"
          to="ruang bersama" end>
          Ruang Bersama
        </NavLink>
      </li>
    </ul>
  )
}

export default Links
