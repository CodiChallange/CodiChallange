import { InfoCard } from '@/Components/InfoCard'
import { BanknoteArrowDown, ChartNoAxesCombined } from 'lucide-react'

export function Dashboard() {
  return (
    <main className='sm:ml-14 p-4 bg-[#A243D2] h-screen'>
      <section className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <InfoCard
          icon={ChartNoAxesCombined}
          name={'Receitas'}
          value={'1000'}
          description='4%'
        />
        <InfoCard
          icon={BanknoteArrowDown}
          name={'Despesas'}
          value={'1000'}
          description='4%'
        />
      </section>
      <section className='mt-4 flex flex-col md:flex-row gap-4'></section>
    </main>
  )
}
