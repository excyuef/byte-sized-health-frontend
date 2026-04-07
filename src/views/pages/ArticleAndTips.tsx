import Title from '../components/Title.tsx'
import Paragraph from '../components/Paragraph.tsx'
import Card from '../components/Card.tsx'
import Article from '../components/Article.tsx'
import { useState } from 'react'
import img1 from '@/assets/elemen/1.png'
import img2 from '@/assets/elemen/7.png'
import img3 from '@/assets/elemen/12.png'
import img4 from '@/assets/elemen/8.png'
import img5 from '@/assets/elemen/10.png'
import { articles } from '@/models/articles.ts'

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

  const penyebab: Cards[] = [
    { title: "People Pleasing", img: img1 },
    { title: "Terlalu Perfeksionis", img: img2 },
    { title: "Lingkungan Kerja Toxic", img: img3 },
  ]

  const mengatasi: Cards[] = [
    { title: "Berani bilang 'Tidak'", img: img1 },
    { title: "Social Media Detoks", img: img2 },
    { title: "Manajemen Tugas", img: img3 },
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
            className='font-medium text-2xl'
            data-aos="fade-right">
            Kenapa kamu bisa Burnout?
          </h2>
        </div>

        <div
          className='w-full grid grid-cols-2 md:grid-cols-3 justify-items-center xl:px-32'>
          {penyebab.map((card, i) => {
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
            className='font-medium text-2xl'
            data-aos="fade-right">
            Cara mengatasinya
          </h2>
        </div>

        <div
          className='w-full grid grid-cols-2 md:grid-cols-3 justify-items-center xl:px-32'>
          {mengatasi.map((card, i) => {
            i = i + 3
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
          className='flex flex-col gap-6'>
          {articles.map((article) => {
            return <Article
              title={article.title}
              source={article.source}
              url={article.url} />

          })}
        </div>
      </div>



    </>
  )
}

export default ArticleAndTips
