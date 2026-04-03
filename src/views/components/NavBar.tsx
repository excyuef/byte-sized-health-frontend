import { useState } from 'react'
import Logo from './Logo.tsx'
import Links from './Links.tsx'
import Auth from './AuthNav.tsx'
import MobileMenu from './Mobile.tsx'

function Nav() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleHandler = () => {
    setOpen(!isOpen)
  }

  return (
    <header
      className="bg-(--primary-color-1) h-12 md:h-16 fixed top-0 left-0 right-0 
      z-10">
      <div
        className="mx-auto flex h-full items-center justify-between 
        sm:gap-8 px-2 md:px-8 lg:px-32 xl:px-60">
        <Logo />

        <div
          className={`absolute lg:static ${isOpen
            ? '-translate-x-full'
            : 'translate-x-0'} 
          left-full transition top-12 md:top-14 items-center 
          bg-(--primary-color-1) px-5 pt-4 pb-8 rounded-b-md lg:p-0`}>
          <nav
            className="flex justify-center min-w-32 md:min-w-46">
            <Links />
          </nav>
        </div>

        <div
          className="flex items-center">
          <div
            className="flex items-center gap-2 md:gap-4">
            <Auth />
            <MobileMenu toggle={toggleHandler} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav
