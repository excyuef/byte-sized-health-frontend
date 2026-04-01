function Links() {
  const link: string[] = ['Beranda', 'Artikel & Tips']

  return (
    <ul
      className="flex flex-col lg:flex-row items-center justify-center gap-6">
      {link.map(li => {
        return (
          <li>
            <a
              className="text-(--primary-color-2) transition 
              hover:text-gray-500/75"
              key={li}
              href="#">
              {li}
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
