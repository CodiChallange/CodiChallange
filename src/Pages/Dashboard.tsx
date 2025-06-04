import { InfoCard } from '@/Components/InfoCard'
import { Aside } from '@/Components/Aside'
import { BanknoteArrowDown, ChartNoAxesCombined } from 'lucide-react'
import { Button } from '@/Components/Button'
import { useNavigate } from 'react-router-dom'

export function Dashboard() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <div className='flex '>
      <Aside />
      <main className=' bg-[#FFFFFF] h-screen w-full'>
        <div className='m-8 flex justify-between items-center border'>
          <div>
            <h1 className='text-2xl font-bold'>Dashboard Financeiro</h1>
            <p className='text-sm text-zinc-600'>
              Visão geral das finanças da Codi Academy
            </p>
          </div>
          <div className='flex gap-2 mr-8'>
            <button>Este Mês</button>
            <button>Filtros</button>
          </div>
        </div>
        <section className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
          <InfoCard
            icon={ChartNoAxesCombined}
            name=' Total de Receitas'
            value='R$1000'
            color='green'
          />
          <InfoCard
            icon={BanknoteArrowDown}
            name=' Total de Despesas'
            value='R$1000'
            color='red'
          />
          <InfoCard
            icon={BanknoteArrowDown}
            name='Saldo Liquido'
            value='R$1000'
            color='blue'
          />
        </section>
        <section className='m-8 p-2 border-2 border-purple-200 rounded-lg flex flex-col bg-purple-100 p-8 '>
          <div>
            <h3 className='text-xl font-semibold text-[#A243D2]'>
              Ações Rapidas
            </h3>
          </div>
          <div className='flex flex-col md:flex-row gap-4 '>
            <Button onClick={handleClick} to='/venda'>
              Nova Venda
            </Button>
            <Button onClick={handleClick} to='/gastos'>
              Nova Despesa
            </Button>
            <Button onClick={handleClick} to='/relatorios'>
              Ver Relatórios
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
