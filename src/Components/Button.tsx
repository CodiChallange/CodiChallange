import { type ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      type='button'
      {...rest}
      name='button'
      className='h-14 border-0 px-4 w-full text-amber-50 
                        bg-[#A243D2] rounded-lg font-medium mt-4 hover:bg-[#8138a5] 
                        duration-[2s] '
    >
      {children}
    </button>
  )
}
