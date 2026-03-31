import './App.css'
import Nav from './views/components/NavBar.tsx'
import Hero from './views/components/Hero.tsx'
import Intro from './views/components/Intro.tsx'

function App() {
  return (
    <div
      className="mx-2 md:mx-8 lg:mx-32 xl:mx-60 pt-200">
      <Nav />
      <Hero />
      <Intro />
    </div>
  )
}

export default App
