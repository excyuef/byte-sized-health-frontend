import Button from './Button.tsx'
import Burnout from '@/assets/elemen/burnout.jpg'

function Intro() {
  return (
    <div
      className="flex flex-col md:flex-row gap-12">
      <div
        className="md:w-2/3 flex flex-col justify-center order-2 md:order-1">
        <h2
          className="text-base md:text-xl font-medium"
          data-aos="fade-right"
          data-aos-offset="300">
          Ayo Kenali
        </h2>
        <h1
          className="text-5xl md:text-6xl font-bold text-(--primary-color-2)"
          data-aos="fade-right" data-aos-offset="300">
          Burnout
        </h1>
        <h3
          className="text-[1rem]"
          data-aos="fade-right" data-aos-offset="300">
          Istirahatlah hari ini, karena dunia bisa menunggu namun kesehatan mentalmu tidak.
        </h3>
        <p
          className="text-gray-600 mt-8 mb-6"
          data-aos="fade-right" data-aos-offset="200">
          Lelahmu bukan karena kamu lemah, tapi karena kamu sudah terlalu lama memikul beban sendirian tanpa jeda. Jangan biarkan api dalam dirimu padam hanya karena kamu lupa cara menjaga baranya tetap tenang. Temukan 5 langkah sederhana untuk memulihkan energimu kembali tanpa rasa bersalah di tautan ini. Kamu berhak mendapatkan ketenangan yang selama ini tertunda.
        </p>

        <div
          className='flex gap-4 text-(--primary-color-2)'>
          <Button>
            Mulai cerita kamu disini
          </Button>
          <Button>
            Sudah punya akun? Login
          </Button>
        </div>
      </div>

      <div
        className="md:w-1/3 order-1 md:order-2"
        data-aos="fade-left"
        data-aos-offset="300">
        <img
          className="object-cover object-left h-64 md:h-128 w-full 
          rounded-4xl shadow-2xl"
          src={Burnout}
          alt="stress people" />
      </div>
    </div>
  )
}

export default Intro
