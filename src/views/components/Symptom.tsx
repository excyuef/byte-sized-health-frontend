import Card from './Card.tsx'

function Symptom() {
  return (
    <div
      className='flex flex-col gap-8 w-full'>
      <div
        className='lex flex-col gap-4'
        data-aos="fade-up">
        <h2
          className='text-(--primary-black) text-xl font-semibold'>
          Apa kamu pernah mengalami ini?
        </h2>
        <p
          className='text-gray-600'>
          Jika kamu mengalami 3 dari 5 gejala tersebut, besar kemungkinan kamu mengalami burnout, apa itu burnout?, baca artikel di bawah
        </p>
      </div>
      <div
        className='w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5
        justify-items-center gap-y-8'>

        <Card>Kelelahan Fisik</Card>
        <Card>Kelelahan Fisik</Card>
        <Card>Kelelahan Fisik</Card>
        <div
          className='md:col-span-3 flex md:flex-row flex-col gap-12 md:gap-12 
          xl:col-start-4'>
          <Card>Kelelahan Fisik</Card>
          <Card>Kelelahan Fisik</Card>
        </div>
      </div>
    </div>
  )
}

export default Symptom
