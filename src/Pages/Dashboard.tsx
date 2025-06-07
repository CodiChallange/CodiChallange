import { InfoCard } from '@/Components/InfoCard'
import { Aside } from '@/Components/Aside'
import { BanknoteArrowDown, ChartNoAxesCombined } from 'lucide-react'
import { Button } from '@/Components/ui/button'
import { useNavigate } from 'react-router-dom'
import { Popover } from '@radix-ui/react-popover'
import { PopoverContent, PopoverTrigger } from '@/Components/ui/popover'

export function Dashboard() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <div className='flex '>
      <Aside />
      <main className=' bg-[#FFFFFF] h-screen w-full'>
        <div className='m-8 flex justify-between items-center p-4'>
          <div>
            <h1 className='text-2xl font-bold'>Dashboard Financeiro</h1>
            <p className='text-sm text-zinc-600'>
              Visão geral das finanças da Codi Academy
            </p>
          </div>
          <div className='flex gap-2 mr-8'>
            <Popover>
              <PopoverTrigger>
                <Button variant='outline'>Filtros</Button>
              </PopoverTrigger>
              <PopoverContent className='w-65'>
                <div className='flex flex-row justify-center '>
                  <span className='p-2 rounded ml-3  border-2'>semana</span>
                  <span className='p-2 rounded ml-3  border-2'>mes</span>
                  <span className='p-2 rounded ml-3  border-2'>ano</span>
                </div>
              </PopoverContent>
            </Popover>
            <button>Este Mês</button>
          </div>
        </div>
        <section className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
          <InfoCard
            icon={ChartNoAxesCombined}
            name=' Total deReceitas'
            value='R$1000'
            color='#A243D2'
          />
          <InfoCard
            icon={BanknoteArrowDown}
            name=' Total de Despesas'
            value='R$1000'
            color='#eada13'
          />
          <InfoCard
            icon={BanknoteArrowDown}
            name='Saldo Liquido'
            value='R$1000'
          />
          <InfoCard icon={BanknoteArrowDown} name='Crescimento' value='15.5%' />
        </section>
        <section className='m-8 border-2 border-purple-200 rounded-lg flex flex-col bg-purple-100 p-8 '>
          <div>
            <h3 className='text-xl font-semibold text-[#A243D2]'>
              Ações Rapidas
            </h3>
          </div>
          <div className='flex flex-col md:flex-row gap-4 '>
            <Button to='/venda'>+ Nova Venda</Button>
            <Button to='/gastos'>+ Nova Despesa</Button>
            <Button to='/relatorios'>+ Ver Relatórios</Button>
          </div>
        </section>
      </main>
    </div>
  )
}
