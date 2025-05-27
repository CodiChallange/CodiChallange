import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from './ui/chart'

export function Charts() {
  const courseSalesData = [
    {
      month: 'January',
      frontendPresencial: 2200,
      frontendEad: 1800,
      fullstackPresencial: 2500,
      fullstackEad: 6800,
      total: 3100,
    },
    {
      month: 'February',
      frontendPresencial: 2200,
      frontendEad: 0,
      fullstackPresencial: 0,
      fullstackEad: 6800,
      total: 9000,
    },
    {
      month: 'March',
      frontendPresencial: 0,
      frontendEad: 1800,
      fullstackPresencial: 0,
      fullstackEad: 6800,
      total: 8600,
    },
    {
      month: 'April',
      frontendPresencial: 2200,
      frontendEad: 1800,
      fullstackPresencial: 2500,
      fullstackEad: 6800,
      total: 13300,
    },
    {
      month: 'May',
      frontendPresencial: 2200,
      frontendEad: 1800,
      fullstackPresencial: 2500,
      fullstackEad: 0,
      total: 6500,
    },
    {
      month: 'June',
      frontendPresencial: 0,
      frontendEad: 0,
      fullstackPresencial: 0,
      fullstackEad: 6800,
      total: 6800,
    },
  ]

  const courseSalesConfig = {
    frontendPresencial: {
      label: 'Frontend Presencial',
      color: '#16a34a', // verde
    },
    frontendEad: {
      label: 'Frontend EAD',
      color: '#22c55e',
      // verde claro
    },
    fullstackPresencial: {
      label: 'Fullstack Presencial',
      color: '#7c3aed', // roxo
    },
    fullstackEad: {
      label: 'Fullstack EAD',
      color: '#c084fc', // roxo claro
    },
    total: {
      label: 'Total',
      color: '#3b82f6', // azul
    },
  } satisfies ChartConfig
  return (
    <ChartContainer
      config={courseSalesConfig}
      className=' flex  justify-center h-30'
    >
      <AreaChart
        data={courseSalesData}
        accessibilityLayer
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey='month'
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.substring(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator='line' />}
        />
        <Area
          dataKey='total'
          type='natural'
          fill='#16a34a'
          fillOpacity={0.4}
          stroke='var(--color-desktop)'
        />
        {/* <Area
          dataKey='frontendEad'
          type='natural'
          fill='#16a34a'
          fillOpacity={0.4}
          stroke='var(--color-desktop)'
        /> */}
      </AreaChart>
    </ChartContainer>
  )
}
