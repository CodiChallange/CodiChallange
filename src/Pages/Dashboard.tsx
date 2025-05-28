import { InfoCard } from '@/Components/InfoCard'
import { Aside } from '@/Components/Aside'
import { BanknoteArrowDown, ChartNoAxesCombined } from 'lucide-react'

export function Dashboard() {
  return (
    <div className='flex '>
      <Aside />
      <main className=' bg-[#A243D2] h-screen w-full'>
        <section className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
          <InfoCard
            icon={ChartNoAxesCombined}
            name='Receitas'
            value='1000'
            color='#A243D2'
          />
          <InfoCard
            icon={BanknoteArrowDown}
            name='Despesas'
            value='1000'
            color='#A243D2'
          />
        </section>
        <section className='mt-4 flex flex-col md:flex-row '></section>
      </main>
    </div>
  )
}
