import Card from './Card.tsx'
import Explanation from './Explanation.tsx'
import { explanations } from '../../models/explanations.ts'
import { useState } from 'react'
import clsx from 'clsx'

import img1 from '@/assets/elemen/1.png'
import img2 from '@/assets/elemen/7.png'
import img3 from '@/assets/elemen/12.png'
import img4 from '@/assets/elemen/8.png'
import img5 from '@/assets/elemen/10.png'


type Cards =
  {
    title: string,
    img: string
  }

function Symptom() {
  const [isActive, setActive] = useState<number | null>(null)

  const handleOnCLick = (id: number) => {
    setActive(id)
  }

  const cards: Cards[] = [
    { title: "Kelelahan Fisik", img: img1 },
    { title: "Moodswing", img: img2 },
    { title: "Depersonalisasi", img: img3 },
    { title: "Penurunan Performa", img: img4 },
    { title: "Gangguan Motivasi", img: img5 },
  ]


  return (
    <div
      className='flex flex-col gap-18 w-full h-full mt-150 md:mt-180'>
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
        justify-items-center gap-y-6'>

        {cards.slice(0, 3).map((card, i) => {
          return <Card
            key={i}
            id={i}
            img={card.img}
            active={isActive === i}
            onClick={() => handleOnCLick(i)}>
            {card.title}
          </Card>

        })}

        <div
          className='md:col-span-3 flex md:flex-row flex-col gap-8 
          md:gap-3 lg:gap-8 xl:gap-4 xl:col-start-4'>

          {cards.slice(3).map((card, i) => {
            i = i + 3
            return (
              <Card
                key={i}
                id={i}
                img={card.img}
                active={isActive === i}
                onClick={() => handleOnCLick(i)}>
                {card.title}
              </Card>
            )
          })}
        </div>
      </div>

      <div
        className={clsx(isActive === null ? 'h-0' : 'h-64', 'relative')}>
        {explanations.map((explain, i) => {
          return (
            <Explanation
              key={i}
              id={i}
              active={isActive === i}
              title={explain.title}
              examples={explain.examples}>
              {explain.children}
            </Explanation>
          )
        })}

      </div>
    </div>
  )
}

export default Symptom
