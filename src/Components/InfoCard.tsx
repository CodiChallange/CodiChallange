import type React from 'react'

import { Card, CardHeader, CardTitle, CardContent } from './ui/card'

import type { IconBaseProps } from 'react-icons'

interface InfoCardProps {
  name: string
  icon?: React.ComponentType<IconBaseProps>
  value: number
  color?: string
}
export function InfoCard({ name, icon: Icon, value, color }: InfoCardProps) {
  return (
    <Card className={` gap-1  w-52 h-40 m-8  text-[${color}]`}>
      <CardHeader className='flex flex-row  gap-16 justify-between items-center'>
        {Icon && <Icon size={24} className={`text-[${color}] `} />}
        <CardTitle className='flex flex-row gap-2'>
          {Icon && <Icon size={12} className={`text-[${color}]`} />}
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col  justify-center  mt-4'>
        <p className='text-[0.625rem text-left  '> {name} </p>
        <span className='text-2xl font-bold mt-4'>{value}</span>
      </CardContent>
    </Card>
  )
}
