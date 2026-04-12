import { Outlet } from 'react-router'
import './Root.css'
import Nav from './views/components/NavBar.tsx'
import Footer from './views/components/Footer.tsx'

function Root() {
  return (
    <div>
      <Nav />
      <div
        className="mx-2 md:mx-8 lg:mx-32 xl:mx-60 pb-64
      flex flex-col gap-40 overflow-hidden xl:overflow-visible">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Root
