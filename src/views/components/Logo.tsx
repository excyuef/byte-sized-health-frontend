function Logo() {
  return (
    <a
      href="#"
      title=""
      className="md:flex items-center md:gap-3 text-md 
      md:text-xl text-(--primary-color-2) h-8">
      <img
        src="/logo.png"
        alt="logo"
        className="h-full object-cover object-center" />
      <img
        src="/tipografi.png"
        alt="logo tipografi"
        className="h-full hidden md:inline w-full object-cover" />
    </a>
  )
}

export default Logo
