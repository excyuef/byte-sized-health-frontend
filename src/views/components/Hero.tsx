function Hero() {
  return (
    <div className='h-138 absolute top-12 md:top-14 
      left-0 right-0 flex items-center justify-center'>
      <img
        className="absolute -z-10 h-full w-full object-top object-cover 
        inset-0 blur-md"
        src="/hero.jpg"
        alt="hero" />

      <div
        className="flex flex-col gap-2 items-center">
        <h2
          className="text-8xl font-medium text-[#091939] text-shadow-gray-700 
          text-shadow-md">
          Byte-Sized
        </h2>
        <h1
          className="text-9xl font-bold text-[#025CEA] text-shadow-white 
          text-shadow-md">
          Health
        </h1>
        <span
          className="text-[#091939] text-lg">
          Bantu atasi burn out kamu
        </span>
      </div>
    </div>
  )
}

export default Hero
