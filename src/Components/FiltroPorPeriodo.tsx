import { useState } from 'react'

import { Button } from './ui/button'
import { Funnel } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

type Props = {
  onChange: (filtro: 'semana' | 'mes' | 'ano') => void
}

export function FiltroPorPeriodo({ onChange }: Props) {
  const [selected, setSelected] = useState<'' | 'semana' | 'mes' | 'ano'>('')
  const filtros = ['semana', 'mes', 'ano']

  const handleSelect = (filtro: 'semana' | 'mes' | 'ano') => {
    setSelected(filtro)
    onChange(filtro)
  }

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
              variant={selected === filtro ? 'default' : 'outline'}
              className='flex-1 capitalize'
              onClick={() => handleSelect(filtro as 'semana' | 'mes' | 'ano')}
            >
              {filtro}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
