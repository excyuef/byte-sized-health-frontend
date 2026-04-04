import ExplainList from './ExplainList.tsx'
import type { ExplainProps } from '../../models/types/Explanation.ts'

function Explanation({ id, active, title, children, examples }: ExplainProps) {
  console.log(active)
  return (
    <div
      className={`${active ? 'static' : 'hidden'} flex flex-col gap-4`}
      data-aos="zoom-out"
      id={id}>
      <h2
        className='text-3xl text-(--primary-black) font-medium'>
        {title}
      </h2>
      <div
        className='bg-(--primary-color-1) p-7 rounded-2xl shadow-xl
        flex flex-col gap-6'>
        <span
          className='text-[17px]'>
          {children}
        </span>

        <div
          className='grid gap-3 grid-cols-2'>
          {
            examples.map((example) => {
              return (
                <ExplainList>
                  {example}
                </ExplainList>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Explanation
