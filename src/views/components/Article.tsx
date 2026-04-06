type ArticleProps = {
  title: string
  source: string
}

function Article({ title, source }: ArticleProps) {
  return (
    <div
      className="p-4 bg-(--primary-color-2) rounded-xl flex gap-4 shadow-2xl">
      <div>
        <img
          src="src/assets/background/hero.jpeg"
          alt="gambar artikel"
          className="w-32 aspect-square object-cover rounded-xl" />
      </div>
      <div
        className="flex flex-col justify-center gap-2 text-white">
        <h2
          className="text-xl font-semibold">
          {title}
        </h2>
        <span>
          Sumber/Source: {source}
        </span>
      </div>
    </div>
  )
}

export default Article
