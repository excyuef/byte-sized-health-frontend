import Nav from '../components/NavBar.tsx'
import Hero from '../components/Hero.tsx'
import Intro from '../components/Intro.tsx'
import Symptom from '../components/Symptom.tsx'

function LandingPage() {
  return (
    <div
      className="mx-2 md:mx-8 lg:mx-32 xl:mx-60 pt-100 md:pt-180 pb-50
      flex flex-col gap-40 overflow-hidden">
      <Nav />
      <Hero />
      <Symptom />
      <Intro />
    </div>
  )
}

export default LandingPage
