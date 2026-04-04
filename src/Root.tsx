import { Outlet } from 'react-router'
import './Root.css'
import Nav from './views/components/NavBar.tsx'

function Root() {
  return (
    <div
      className="mx-2 md:mx-8 lg:mx-32 xl:mx-60 pt-100 md:pt-180 pb-50
      flex flex-col gap-40 overflow-hidden xl:overflow-visible">
      <Nav />
      <Outlet />
    </div>
  )
}

export default Root
