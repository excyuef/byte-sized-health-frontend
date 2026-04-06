import ExplainList from './ExplainList.tsx'
import type { ExplainProps } from '../../models/types/Explanation.ts'
import clsx from 'clsx'

function Explanation({ id, active, title, children, examples }: ExplainProps) {
  return (
    <div
      className={clsx(active ? 'opacity-100' : 'opacity-0', 'absolute flex flex-col gap-4 scroll-mt-38')}
      id={`${id}`}>
      <h2
        className='text-3xl text-(--primary-black) font-medium'
        data-aos="fade-right"
        data-aos-offset="500">
        {title}
      </h2>
      <div
        className='bg-(--primary-color-1) p-7.5 rounded-2xl shadow-xl
        flex flex-col gap-6'
        data-aos="fade"
        data-aos-offset="500">
        <span
          className='text-[17px]'
          data-aos="fade-right"
          data-aos-offset="400" data-aos-delay="200">
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
