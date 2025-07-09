import { type ButtonHTMLAttributes } from 'react'
import { useNavigate } from 'react-router-dom'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  to?: string
}

export function Button({ children, to, ...rest }: ButtonProps) {
  const navigate = useNavigate()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (rest.onClick) {
      rest.onClick(e) // mantém comportamento customizado, se existir
    }

    if (to) {
      navigate(to)
    }
  }
  return (
    <button
      type='button'
      {...rest}
      name='button'
      onClick={handleClick}
      className='h-14 border-0 px-4 w-full text-amber-50 
                        bg-[#A243D2] rounded-lg font-medium mt-4 hover:bg-[#8138a5] 
                        duration-[2s] '
    >
      {children}
    </button>
  )
}
