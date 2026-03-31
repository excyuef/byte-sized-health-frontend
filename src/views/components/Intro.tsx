function Intro() {
  return (
    <div
      className="flex gap-4">
      <div
        className="w-2/3 flex flex-col justify-center">
        <h2
          className="text-xl font-medium">
          Ayo Kenali
        </h2>
        <h1
          className="text-6xl font-bold">
          Bornout
        </h1>
        <h3
          className="text-[1rem]">
          Istirahatlah hari ini, karena dunia bisa menunggu namun kesehatan mentalmu tidak.
        </h3>
        <p
          className="text-gray-600 mt-8">
          Lelahmu bukan karena kamu lemah, tapi karena kamu sudah terlalu lama memikul beban sendirian tanpa jeda. Jangan biarkan api dalam dirimu padam hanya karena kamu lupa cara menjaga baranya tetap tenang. Temukan 5 langkah sederhana untuk memulihkan energimu kembali tanpa rasa bersalah di tautan ini. Kamu berhak mendapatkan ketenangan yang selama ini tertunda.
        </p>
      </div>

      <div
        className="w-1/3">
        <img
          className="object-cover object-left h-128 w-full rounded-4xl"
          src="/hero.jpg"
          alt="stress people" />
      </div>
    </div>
  )
}

export default Intro
