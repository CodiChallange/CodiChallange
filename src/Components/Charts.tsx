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
      frontendPresencial: 3200,
      frontendEad: 5400,
      fullstackPresencial: 4600,
      fullstackEad: 7800,
    },
    {
      month: 'February',
      frontendPresencial: 4100,
      frontendEad: 6200,
      fullstackPresencial: 5100,
      fullstackEad: 8200,
    },
    {
      month: 'March',
      frontendPresencial: 3700,
      frontendEad: 5800,
      fullstackPresencial: 4900,
      fullstackEad: 8000,
    },
    {
      month: 'April',
      frontendPresencial: 2900,
      frontendEad: 5300,
      fullstackPresencial: 4200,
      fullstackEad: 7600,
    },
    {
      month: 'May',
      frontendPresencial: 3500,
      frontendEad: 6100,
      fullstackPresencial: 4700,
      fullstackEad: 8100,
    },
    {
      month: 'June',
      frontendPresencial: 3800,
      frontendEad: 6400,
      fullstackPresencial: 5000,
      fullstackEad: 8500,
    },
  ]

  const courseSalesConfig = {
    frontendPresencial: {
      label: 'Frontend Presencial',
      color: '#16a34a', // verde
    },
    frontendEad: {
      label: 'Frontend EAD',
      color: '#22c55e', // verde claro
    },
    fullstackPresencial: {
      label: 'Fullstack Presencial',
      color: '#7c3aed', // roxo
    },
    fullstackEad: {
      label: 'Fullstack EAD',
      color: '#c084fc', // roxo claro
    },
  } satisfies ChartConfig
  return (
    <ChartContainer
      config={courseSalesConfig}
      className=' min-h-[12.5rem] w-full'
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
          dataKey='frontendPresencial'
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
