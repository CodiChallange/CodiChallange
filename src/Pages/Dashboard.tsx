import { InfoCard } from '@/Components/InfoCard'
import { Aside } from '@/Components/Aside'
import {
  BanknoteArrowDown,
  ChartNoAxesCombined,
  TrendingDown,
  TrendingUp,
  TrendingUpDown,
} from 'lucide-react'
import { Button } from '@/Components/Button'
import { useNavigate } from 'react-router-dom'

import { RangeCalendar } from '@/Components/RangeCalendar'

import { useEffect, useState } from 'react'

import { getTotalSales, type totalSalesResponse } from '@/http/getTotalSales'

import {
  getTotalExpenses,
  type totalExpensesResponse,
} from '@/http/getTotalExpenses'
import { Charts } from '@/Components/Charts'
import { FiltroPorPeriodo } from '@/Components/FiltroPorPeriodo'

export function Dashboard() {
  const [filtroSelecionado, setFiltroSelecionado] = useState<
    'semana' | 'mes' | 'ano'
  >('mes')
  //Navegação do card ações rápidas
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  //Funções para obter o total de vendas
  const [totalVendas, setTotalVendas] = useState<totalSalesResponse[]>([])

  async function getTotalSale() {
    try {
      const result = await getTotalSales()
      setTotalVendas(result)
    } catch (error) {}
  }
  const totalSale = totalVendas.reduce((acc, vendas) => {
    return acc + vendas.valor
  }, 0)

  useEffect(() => {
    getTotalSale()
  }, [])

  //Funções para obter o total de despesas

  const [totalDespesas, setTotalDespesas] = useState<totalExpensesResponse[]>(
    []
  )
  async function getTotalExpense() {
    try {
      const result = await getTotalExpenses()
      setTotalDespesas(result)
    } catch (error) {}
  }
  const totalExpenses = totalDespesas.reduce((acc, expenses) => {
    return acc + expenses.valor
  }, 0)

  useEffect(() => {
    getTotalExpense()
  }, [])

  //Calculo saldo liquido

  const saldoLiquido = totalSale - totalExpenses

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
            <FiltroPorPeriodo onChange={setFiltroSelecionado} />
            <RangeCalendar />
          </div>
        </div>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-50 ml-8 w-285'>
          <InfoCard
            iconMain={TrendingUp}
            iconSecundary={ChartNoAxesCombined}
            name=' Total de Receitas'
            value={totalSale}
            color='green'
          />
          <InfoCard
            iconMain={TrendingDown}
            iconSecundary={BanknoteArrowDown}
            name=' Total de Despesas'
            value={totalExpenses}
            color='red'
          />

          <InfoCard
            iconMain={TrendingUpDown}
            iconSecundary={BanknoteArrowDown}
            name='Saldo Liquido'
            value={saldoLiquido}
            color='blue'
          />
        </section>
        <section className='m-8 border-2 border-purple-200 rounded-lg flex flex-col bg-purple-100 p-8 '>
          <Charts filtro={filtroSelecionado} />
        </section>
        <section className='m-8  border-2 border-purple-200 rounded-lg flex flex-col bg-purple-100 p-8 '>
          <div>
            <h3 className='text-xl font-semibold text-[#A243D2]'>
              Ações Rapidas
            </h3>
          </div>
          <div className='flex flex-col md:flex-row gap-4 '>
            <Button to='/vendas'> Nova Venda</Button>
            <Button to='/gastos'> Nova Despesa</Button>
            <Button to='/relatorios'> Ver Relatórios</Button>
          </div>
        </section>
      </main>
    </div>
  )
}
