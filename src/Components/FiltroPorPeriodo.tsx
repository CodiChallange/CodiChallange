import { Button } from './ui/button'
import { Funnel } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

type Filtro = 'semana' | 'mes' | 'ano'
type Props = {
  value: Filtro
  onChange: (filtro: Filtro) => void
}
//COmponente de filtro que exibe o grafico de acordo com o que foi selecionado no filtro
export function FiltroPorPeriodo({ value, onChange }: Props) {
  const filtros: Filtro[] = ['semana', 'mes', 'ano']

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant='outline'>
          <Funnel className='mr-2 h-4 w-4' />
          Visualizar por
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-64'>
        <div className='flex justify-between gap-2'>
          {filtros.map((filtro) => (
            <Button
              key={filtro}
              variant={value === filtro ? 'default' : 'outline'}
              className='flex-1 capitalize'
              onClick={() => onChange(filtro)}
            >
              {filtro}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
