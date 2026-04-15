import Hero from '../components/Hero.tsx'
import Intro from '../components/Intro.tsx'
import Symptom from '../components/Symptom.tsx'

function LandingPage() {
  return (
    <div
      className=' overflow-hidden xl:overflow-visible'>
      <Hero />
      <Symptom />
      <Intro />
    </div>
  )
}

export default LandingPage
