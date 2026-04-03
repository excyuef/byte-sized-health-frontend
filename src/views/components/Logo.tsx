function Logo() {
  return (
    <a
      href="#"
      title=""
      className="md:flex items-center md:gap-1 text-md 
      md:text-xl text-(--primary-color-2) h-9.5">
      <img
        src="/logo-transparan.png"
        alt="logo"
        className="rounded-4xl object-cover object-center h-9" />
      <img
        src="/logo-text.png"
        alt="logo text"
        className="hidden md:inline h-12 w-full object-cover object-top" />
    </a>
  )
}

export default Logo
