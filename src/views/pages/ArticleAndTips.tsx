import Title from '../components/Title.tsx'
import Paragraph from '../components/Paragraph.tsx'
import Card from '../components/Card.tsx'
import Article from '../components/Article.tsx'
import { useState } from 'react'

type Cards =
  {
    title: string,
    img: string
  }

function ArticleAndTips() {

  const [isActive, setActive] = useState<number | null>(null)
  const handleOnCLick = (id: number) => {
    setActive(id)
  }

  const cards: Cards[] = [
    { title: "Kelelahan Fisik", img: "src/assets/elemen/1.png" },
    { title: "Moodswing", img: "src/assets/elemen/7.png" },
    { title: "Depersonalisasi", img: "src/assets/elemen/12.png" },
    { title: "Penurunan Performa", img: "src/assets/elemen/8.png" },
    { title: "Gangguan Motivasi", img: "src/assets/elemen/10.png" },
  ]

  return (
    <>
      <div
        className='flex flex-col gap-6'>
        <Title>
          Tips
        </Title>
        <Paragraph />
      </div>

      <div
        className='flex flex-col gap-8'>
        <div>
          <h2
            className='font-medium text-xl'>
            Kenapa kamu bisa Burnout?
          </h2>
        </div>

        <div
          className='w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5
        justify-items-center gap-6'>
          {cards.map((card, i) => {
            return <Card
              key={i}
              id={i}
              img={card.img}
              active={isActive === i}
              onClick={() => handleOnCLick(i)}>
              {card.title}
            </Card>
          })}
        </div>
      </div>

      <div
        className='flex flex-col gap-8'>
        <div>
          <h2
            className='font-medium text-xl'>
            Kenapa kamu bisa Burnout?
          </h2>
        </div>

        <div
          className='w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5
        justify-items-center gap-6'>
          {cards.map((card, i) => {
            return <Card
              key={i}
              id={i}
              img={card.img}
              active={isActive === i}
              onClick={() => handleOnCLick(i)}>
              {card.title}
            </Card>
          })}
        </div>
      </div>

      <div
        className='flex flex-col gap-12'>
        <Title>
          Artikel
        </Title>
        <div
          className='flex flex-col gap-4'>
          <Article
            title="Judul Artikel"
            source="trust me" />
          <Article
            title="Judul Artikel"
            source="trust me" />
          <Article
            title="Judul Artikel"
            source="trust me" />
          <Article
            title="Judul Artikel"
            source="trust me" />
          <Article
            title="Judul Artikel"
            source="trust me" />

        </div>
      </div>



    </>
  )
}

export default ArticleAndTips
