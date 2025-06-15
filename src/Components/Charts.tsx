import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
} from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from './ui/chart'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { parseISO, format, getISOWeek } from 'date-fns'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

type Venda = {
  id: string
  nome: string
  curso: string
  valor: number
  data: string
}
type Despesa = {
  id: string
  descricao: string
  valor: number
  data: string
  tipo: string
  formaPagamento: string
}
type Props = {
  filtro: 'semana' | 'mes' | 'ano'
  tipo: 'barChart' | 'lineChart'
}

export function Charts({ filtro, tipo }: Props) {
  // Buscar os dados da API
  const [dados, setDados] = useState<
    { periodo: string; totalVendas: number; totalDespesas: number }[]
  >([])

  useEffect(() => {
    Promise.all([
      axios.get<Venda[]>('http://localhost:3000/Vendas'),
      axios.get<Despesa[]>('http://localhost:3000/despesas'),
    ])
      .then(([resVendas, resDespesas]) => {
        const vendas: Venda[] = resVendas.data
        const despesas: Despesa[] = resDespesas.data
        // Agrupar por mês (formato MM/yyyy)
        const agrupado = (items: { data: string; valor: number }[]) => {
          return items.reduce((acc: Record<string, number>, item) => {
            const data = parseISO(item.data)

            let chave = ''
            if (filtro === 'mes') {
              chave = format(data, 'MM/yyyy')
            } else if (filtro === 'semana') {
              const semana = getISOWeek(data)
              chave = `Semana ${semana} - ${format(data, 'MM/yyyy')}`
            } else if (filtro === 'ano') {
              chave = format(data, 'yyyy')
            }

            acc[chave] = (acc[chave] || 0) + item.valor
            return acc
          }, {})
        }
        const vendasAgrupadas = agrupado(vendas)
        const despesasAgrupadas = agrupado(despesas)
        const todosPeriodos = new Set([
          ...Object.keys(vendasAgrupadas),
          ...Object.keys(despesasAgrupadas),
        ])

        const dadosFormatados = Array.from(todosPeriodos).map((periodo) => ({
          periodo,
          totalVendas: vendasAgrupadas[periodo] || 0,
          totalDespesas: despesasAgrupadas[periodo] || 0,
          balanco: vendasAgrupadas[periodo] - despesasAgrupadas[periodo] || 0,
        }))
        dadosFormatados.sort((a, b) => a.periodo.localeCompare(b.periodo))
        setDados(dadosFormatados)
      })
      .catch((error) => console.error('Erro ao buscar dados:', error))
  }, [filtro])

  return (
    <>
      {tipo === 'barChart' && (
        <Card>
          <CardHeader>
            <CardTitle>Bar Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className='min-h-[200px] w-full'>
              {/* Passo 4: Exibir os dados usando BarChart */}
              <div className='w-full h-'>
                <div className='flex justify-end mb-4'></div>
                <ResponsiveContainer width='100%' height={300}>
                  <BarChart data={dados}>
                    <CartesianGrid vertical={false} strokeDasharray='3 3' />
                    <XAxis dataKey='periodo' />
                    <ChartTooltip />
                    <Bar dataKey='totalVendas' fill='#6366F1' name='Vendas' />
                    <Bar
                      dataKey='totalDespesas'
                      fill='#10B981'
                      name='Despesas'
                    />
                    <Bar dataKey='balanco' fill='#F87171' name='Balanco' />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </CardContent>
        </Card>
      )}
      {tipo === 'lineChart' && (
        <Card>
          <CardHeader>
            <CardTitle>Line Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}}>
              <LineChart
                data={dados}
                margin={{
                  top: 20,
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis dataKey='periodo' />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator='line' />}
                />

                <Line
                  dataKey='totalVendas'
                  type='natural'
                  stroke='#6366F1'
                  strokeWidth={2}
                  dot={{
                    fill: 'var(--color-desktop)',
                  }}
                  activeDot={{
                    r: 6,
                  }}
                >
                  <LabelList
                    position='top'
                    offset={12}
                    className='fill-foreground'
                    fontSize={12}
                  />
                </Line>
                <Line
                  dataKey='totalDespesas'
                  type='natural'
                  stroke='#10B981'
                  strokeWidth={2}
                  dot={{
                    fill: 'var(--color-desktop)',
                  }}
                >
                  <LabelList
                    position='top'
                    offset={12}
                    className='fill-foreground'
                    fontSize={12}
                  />
                </Line>
                <Line
                  dataKey='balanco'
                  type='natural'
                  stroke='#F87171'
                  strokeWidth={2}
                  dot={{
                    fill: 'var(--color-desktop)',
                  }}
                >
                  <LabelList
                    position='top'
                    offset={12}
                    className='fill-foreground'
                    fontSize={12}
                  />
                </Line>
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      )}
    </>
  )
}
