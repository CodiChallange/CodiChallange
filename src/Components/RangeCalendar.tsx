import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

import { Button } from './ui/button'

import { Calendar } from '@/Components/ui/calendar'
import { cn } from '@/lib/utils'

import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

import React from 'react'
type DateRange = {
  from: Date | undefined
  to: Date | undefined
}
export function RangeCalendar() {
  const [date, setDate] = React.useState<DateRange>({
    from: undefined,
    to: undefined,
  })

  const formattedRange =
    date.from && date.to
      ? `${format(date.from, 'dd/MM/yyyy')} - ${format(date.to, 'dd/MM/yyyy')}`
      : 'Selecionar período'
  console.log(date)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          className={cn(
            'w-[14rem] justify-start text-left font-bold whitespace-nowrap',
            !date.from && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className='mr-1 h-4 w-4' />
          {formattedRange}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='start'>
        <Calendar
          mode='range'
          selected={date}
          onSelect={(selected) => {
            setDate(selected as DateRange)
          }}
          numberOfMonths={1}
        />
      </PopoverContent>
    </Popover>
  )
}
