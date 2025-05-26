import type React from 'react'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from './ui/card'

import type { IconBaseProps } from 'react-icons'
import { Charts } from './Charts'
interface InfoCardProps {
  name: string
  icon?: React.ComponentType<IconBaseProps>
  value: string
  description?: string
  color?: string
}
export function InfoCard({
  name,
  icon: Icon,
  value,
  description,
  color,
}: InfoCardProps) {
  return (
    <Card className={`flex flex-col gap-4  w-120 h-60 m-8 text-[${color}]`}>
      <CardHeader className='flex flex-row  gap-42'>
        {Icon && <Icon size={24} />}
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-2 justify-center items-center'>
        <p className='text-2xl'>{value}</p>
        <CardDescription className={`text-[${color}]`}>
          {description}
        </CardDescription>
      </CardContent>
      <CardContent className='flex mt-2 fixed ml-6'>
        <Charts />
      </CardContent>
    </Card>
  )
}
