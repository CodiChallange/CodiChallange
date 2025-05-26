import { InfoCard } from '@/Components/InfoCard'
import { Aside } from '@/Components/Aside'
import { BanknoteArrowDown, ChartNoAxesCombined } from 'lucide-react'

export function Dashboard() {
  return (
    <div className='flex'>
      <Aside />
      <main className=' bg-[#A243D2] h-screen'>
        <section className='grid md:grid-cols-2 lg:grid-cols-4 gap-130'>
          <InfoCard
            icon={ChartNoAxesCombined}
            name='Receitas'
            value='1000'
            description='4%'
            color='#A243D2'
          />
          <InfoCard
            icon={BanknoteArrowDown}
            name='Despesas'
            value='1000'
            description='4%'
            color='#A243D2'
          />
        </section>
        <section className='mt-4 flex flex-col md:flex-row gap-4'></section>
      </main>
    </div>
  )
}
