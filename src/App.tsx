import './App.css'
import Hero from './views/components/Hero.tsx'
import Nav from './views/components/NavBar.tsx'

function App() {
  return (
    <div
      className="mx-2 md:mx-8 lg:mx-32 xl:mx-60 pt-168">
      <Nav />
      <Hero />
    </div>
  )
}

export default App
