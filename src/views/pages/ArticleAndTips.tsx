import Title from '@/views/components/Title.tsx'
import Paragraph from '@/views/components/Paragraph.tsx'
import Card from '@/views/components/Card.tsx'
import Article from '@/views/components/Article.tsx'
import Explanation from '@/views/components/Explanation.tsx'
import { useState } from 'react'
import clsx from 'clsx'
import img1 from '@/assets/elemen/10.png'
import img2 from '@/assets/elemen/11.png'
import img3 from '@/assets/elemen/12.png'
import img4 from '@/assets/elemen/6.png'
import img5 from '@/assets/elemen/14.png'
import img6 from '@/assets/elemen/4.png'
import { articles } from '@/models/articles.ts'

type Cards =
  {
    title: string,
    img: string
  }

type ExplanationObject = {
  title: string
  heading: string
  example?: string
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
    { title: "Berani bilang 'Tidak'", img: img4 },
    { title: "Social Media Detoks", img: img5 },
    { title: "Turunkan Standar", img: img6 },
  ]

  const explanations: ExplanationObject[] = [
    {
      title: "People Pleasing",
      heading: "Kamu ambil semua tugas, semua ajakan nongkrong, dan semua permintaan tolong orang lain karena takut dibilang sombong atau malas. Akhirnya, kapasitasmu penuh.",
    },
    {
      title: "Terlalu Perfeksionis",
      heading: "Kamu merasa nilai 80 itu kegagalan. Kamu menuntut dirimu jadi pahlawan di semua bidang. Ini seperti memaksa motor matic lari dengan kecepatan MotoGP.",
    },
    {
      title: "Lingkungan Toxic",
      heading: "Berada di lingkungan yang isinya cuma kompetisi, saling sindir, atau orang tua yang menuntut hasil tanpa mau tahu prosesnya.",
    },
    {
      title: 'Berani Bilang "Tidak"',
      heading: "Kamu bukan supermarket yang buka 24 jam untuk semua orang. ",
      example: 'Caranya: Mulailah berani menolak hal-hal yang tidak mendesak. Katakan, "Maaf, aku lagi butuh waktu buat istirahat dulu, mungkin lain kali ya." Dunia nggak akan kiamat kok kalau kamu menolak satu ajakan.'
    },
    {
      title: 'Social Media Detoks',
      heading: "Melihat hidup orang lain yang kelihatan sempurna di Instagram itu bikin otak kita capek membanding-bandingkan.",
      example: 'Caranya: Hapus aplikasi medsos atau matikan notifikasi selama akhir pekan. Fokus ke dunia nyata: makan makanan enak, jalan kaki sore, atau tidur siang.'
    },
    {
      title: 'Turunkan Standar Sedikit Saja',
      heading: "Dunia tidak menuntut kamu untuk jadi sempurna setiap saat.",
      example: 'Cara: Belajarlah untuk menerima hasil yang "cukup baik". Tidak semua tugas harus dapat nilai 100. Terkadang, nilai 85 dengan mental yang sehat jauh lebih berharga daripada nilai 100 tapi kamu masuk rumah sakit karena stres.'
    }
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
          className='w-full grid grid-cols-2 md:grid-cols-3 justify-items-center xl:px-32 gap-y-6'>
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
        <div
          className={clsx(isActive === null ? 'h-0' : 'h-32', 'relative')}>
          {explanations.slice(0, 3).map((explain, i) => {
            return (
              <Explanation
                key={i}
                id={i}
                active={isActive === i}
                title={explain.title}
              >
                {explain.heading}
              </Explanation>
            )

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
          className='w-full grid grid-cols-2 md:grid-cols-3 justify-items-center xl:px-32 gap-y-6'>
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
        <div
          className={clsx(isActive === null ? 'h-0' : 'h-46', 'relative')}>
          {explanations.slice(3).map((explain, i) => {
            i = i + 3
            return (
              <Explanation
                key={i}
                id={i}
                active={isActive === i}
                title={explain.title}
                examples={explain.example}>
                {explain.heading}
              </Explanation>
            )
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
              url={article.url}
              img={article.img} />

          })}
        </div>
      </div>



    </>
  )
}

export default ArticleAndTips
