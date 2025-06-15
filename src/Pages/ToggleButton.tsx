import { Charts } from '@/Components/Charts'
import { ToggleGroup, ToggleGroupItem } from '@/Components/ui/toggle-group'
import { useState } from 'react'

interface Props {
  filtro: 'semana' | 'mes' | 'ano'
  setFiltro: React.Dispatch<React.SetStateAction<'semana' | 'mes' | 'ano'>>
}
export function ToggleButton({ filtro, setFiltro }: Props) {
  const [chartType, setChartType] = useState<'barChart' | 'lineChart'>(
    'barChart'
  )

  return (
    <div className='flex items-center flex-col  space-x-1'>
      <div className=' w-328 flex justify-end'>
        <ToggleGroup
          type='single'
          value={chartType}
          onValueChange={(value) => {
            if (value) setChartType(value as 'barChart' | 'lineChart')
          }}
        >
          <ToggleGroupItem value='barChart' className='bg-purple-500 '>
            Bar
          </ToggleGroupItem>
          <ToggleGroupItem
            className='bg-purple-500 '
            value='lineChart'
            disabled={chartType === 'barChart' ? false : true}
          >
            Line
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Exibe o gráfico com base no valor selecionado */}
      <div className=' mt-4 w-328 h-auto'>
        <Charts filtro={filtro} tipo={chartType} />
      </div>
    </div>
  )
}
