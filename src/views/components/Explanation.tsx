import ExplainList from './ExplainList.tsx'
import type { ExplainProps } from '../../models/types/Explanation.ts'
import clsx from 'clsx'

function Explanation({ id, active, title, children, examples }: ExplainProps) {
  return (
    <div
      className={clsx(active ? 'opacity-100' : 'opacity-0', 'absolute flex flex-col gap-4 scroll-mt-38')}
      id={`${id}`}>
      <h2
        className='text-2xl md:text-3xl text-(--primary-black) font-medium'
        data-aos="fade-right"
        data-aos-offset="400">
        {title}
      </h2>
      <div
        className='bg-(--primary-color-1) p-7.5 rounded-2xl shadow-xl
        flex flex-col gap-6'
        data-aos="fade"
        data-aos-offset="400" data-aos-delay="200">
        <span
          className='text-[14px] md:text-[17px]'
        >
          {children}
        </span>

        <div
          className='grid gap-3 grid-cols-1 md:grid-cols-2'>
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
