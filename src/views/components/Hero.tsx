
import hero from '@/assets/background/hero.jpeg'

function Hero() {
  return (
    <div
      className='h-72 md:h-156 absolute top-12 md:top-6 
      left-0 right-0 flex items-center justify-center overflow-hidden'
      data-aos="zoom-up">
      <img
        className="absolute -z-10 h-full w-full object-top object-cover 
        inset-0 blur-lg md:scale-x-105"
        src={hero}
        alt="hero" />

      <div
        className="flex flex-col gap-2 items-center">
        <h2
          className="text-4xl md:text-8xl font-medium 
          text-(--primary-black) text-shadow-gray-700 text-shadow-md"
          data-aos="fade-up">
          Byte-Sized
        </h2>
        <h1
          className="text-5xl md:text-9xl font-bold text-[#025CEA] 
          text-shadow-gray-300 text-shadow-md"
          data-aos="fade-up">
          Health
        </h1>
        <span
          className="text-[#091939] md:text-lg"
          data-aos="fade-up">
          Bantu atasi burn out kamu
        </span>
      </div>
    </div>
  )
}

export default Hero
