import { X } from 'lucide-react'
import React, { useState } from 'react'

type modalProps = {
  haandleOpenModalNew: () => void
}
type OptionType = {
  value: 'ADM' | 'PROF' | 'FIN'
  label: string
}
type FormData = {
  email: string
  name: string
  role: OptionType | null
}

export function ModalAdd({ haandleOpenModalNew }: modalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    role: null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
      <div className=' relative max-w-xl w-full bg-zinc-800 p-10 rounded-2xl '>
        <div className='flex justify-between items-center text-white  mb-6'>
          <h1 className='text-xl font-semibold'>Adicionar Colaborador</h1>
          <button
            className='cursor-pointer hover:text-red-800 '
            onClick={haandleOpenModalNew}
          >
            <X />
          </button>
        </div>
        <form className='text-white flex flex-col items-center gap-3'>
          <div className='flex flex-col items-center'>
            <label>Nome:</label>
            <input
              type='text'
              onChange={handleChange}
              className='bg-white text-black outline-none rounded-2xl py-1 border-4 border-[#A243D2] px-2 '
            />
          </div>
          <div className='flex flex-col items-center'>
            <label>E-mail:</label>
            <input
              onChange={handleChange}
              type='text'
              className='bg-white text-black outline-none rounded-2xl py-1 border-4 border-[#A243D2] px-2 '
            />
          </div>
          <div className='flex flex-col items-center '>
            <label>Role:</label>
          </div>
          <button className=' flex  bg-[#A243D2]  items-center justify-center p-3 rounded-2xl   '>
            Adicionar
          </button>
        </form>
      </div>
    </div>
  )
}
