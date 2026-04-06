type Links = {
  title: string
  url: string
}

function Links() {
  const link: Links[] = [
    {
      title: 'Beranda',
      url: '/'
    },
    {
      title: 'Artikel & Tips',
      url: 'articles'
    }]

  return (
    <ul
      className="flex flex-col lg:flex-row items-center justify-center gap-6">
      {link.map((li, i) => {
        return (
          <li>
            <a
              className="text-(--primary-color-2) transition 
              hover:text-gray-500/75"
              key={i}
              href={li.url}>
              {li.title}
            </a>
          </li>)
      })}

      <li>
        <a
          className="rounded-md bg-(--primary-color-2) px-2 py-1.5 font-medium 
                  text-(--primary-color-1)"
          href="#">
          Ruang Bersama
        </a>
      </li>
    </ul>
  )
}

export default Links
