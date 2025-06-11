import { Card, CardHeader, CardTitle, CardContent } from './ui/card'

import type { IconBaseProps } from 'react-icons'

export type colorTypes = 'green' | 'red' | 'blue'
interface InfoCardProps {
  name: string
  icon?: React.ComponentType<IconBaseProps>
  value: string
  color?: colorTypes
}
export function InfoCard({ name, icon: Icon, value, color }: InfoCardProps) {
  return (
    <div>
      {color === 'green' && (
        <Card className='gap-1  w-74 h-40 m-8  text-green-600'>
          <CardHeader className='flex flex-row  gap-16 justify-between items-center'>
            {Icon && <Icon size={24} className='text-green-600' />}
            <CardTitle className='flex flex-row gap-2'>
              {Icon && <Icon size={12} className='text-green-600' />} {value}
            </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col  justify-center  mt-4'>
            <p className='text-[0.625rem text-left  '> {name} </p>
            <span className='text-2xl font-bold mt-4'>{value}</span>
          </CardContent>
        </Card>
      )}

      {color === 'red' && (
        <Card className='gap-1  w-74 h-40 m-8  text-red-600'>
          <CardHeader className='flex flex-row  gap-16 justify-between items-center'>
            {Icon && <Icon size={24} className='text-red-600' />}
            <CardTitle className='flex flex-row gap-2'>
              {Icon && <Icon size={12} className='text-red-600' />} {value}
            </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col  justify-center  mt-4'>
            <p className='text-[0.625rem text-left  '> {name} </p>
            <span className='text-2xl font-bold mt-4'>{value}</span>
          </CardContent>
        </Card>
      )}
      {color === 'blue' && (
        <Card className='gap-1  w-74 h-40 m-8  text-blue-600'>
          <CardHeader className='flex flex-row  gap-16 justify-between items-center'>
            {Icon && <Icon size={24} className='text-blue-600' />}
            <CardTitle className='flex flex-row gap-2'>
              {Icon && <Icon size={12} className='text-blue-600' />} {value}
            </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col  justify-center  mt-4'>
            <p className='text-[0.625rem text-left  '> {name} </p>
            <span className='text-2xl font-bold mt-4'>{value}</span>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
