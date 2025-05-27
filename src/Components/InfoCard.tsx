import type React from 'react'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card'

import type { IconBaseProps } from 'react-icons'
import { Charts } from './Charts'
interface InfoCardProps {
  name: string
  icon?: React.ComponentType<IconBaseProps>
  value: string

  color?: string
}
export function InfoCard({ name, icon: Icon, value, color }: InfoCardProps) {
  return (
    <Card className={` gap-1  w-80 h-53 m-8  text-[${color}]`}>
      <CardHeader className='flex flex-row  gap-28'>
        {Icon && <Icon size={24} />}
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col  justify-center items-center'>
        <p className='text-2xl'> Total {value}</p>
      </CardContent>
      <CardContent className='w-80 flex justify-center '>
        <Charts />
      </CardContent>
    </Card>
  )
}
