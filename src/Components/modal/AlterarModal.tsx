import { Save, X } from 'lucide-react'

import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from '@/Components/ui/select'

type User = {
  id: string
  name: string
  email: string
  phone: string
  salario: number
  cargo: string
  status: string
  departament: string
}

type modalProps = {
  close: () => void
  user: User | null
}

export function AlterarModal({ close, user }: modalProps) {
  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
      <div className=' relative max-w-xl w-full bg-white p-10 rounded-2xl '>
        <div className='flex justify-between items-center text-black  mb-6'>
          <h1 className='text-xl font-semibold'>Editar colaborador</h1>
          <button
            className='cursor-pointer hover:text-red-500 '
            onClick={close}
          >
            <X />
          </button>
        </div>
        <div className='flex flex-col gap-2'>
          <h1>Dados Pessoais:</h1>
          <form className='flex flex-col gap-3'>
            <div className='flex  w-full gap-3'>
              <div className='flex flex-col w-1/2 '>
                <label> Nome: </label>
                <input
                  type='text'
                  value={user?.name}
                  required
                  className='border border-gray-300 shadow-lg p-1 rounded-lg outline-none w-full'
                />
              </div>
              <div className='flex flex-col w-1/2'>
                <label>Telefone: </label>
                <input
                  required
                  type='text'
                  value={user?.phone}
                  className='border border-gray-300 shadow-lg p-1 rounded-lg outline-none w-full'
                />
              </div>
            </div>
            <div className='flex flex-col w-full'>
              <label> Email: </label>
              <input
                required
                type='email'
                value={user?.email}
                className='border border-gray-300 shadow-lg p-1 rounded-lg outline-none'
              />
            </div>
            <div className='flex flex-col '>
              <label> Salario:</label>
              <input
                required
                value={user?.salario}
                type='number'
                className='border border-gray-300 shadow-lg p-1 rounded-lg outline-none'
              />
            </div>
            <div className='flex gap-3 items-center mt-3'>
              <Select required>
                <SelectTrigger className='flex w-1/2 p-5 border border-gray-300 shadow-lg'>
                  <SelectValue placeholder='Cargo' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='Instrutor'>Instrutor</SelectItem>
                  <SelectItem value='Coordenador'>Coordenador</SelectItem>
                  <SelectItem value='Assistente'>Assistente</SelectItem>
                  <SelectItem value='Gerente'>Gerente</SelectItem>
                </SelectContent>
              </Select>
              <Select required>
                <SelectTrigger className='flex w-1/2    p-5 border border-gray-300 shadow-lg '>
                  <SelectValue placeholder='Status' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='Ativo'>Ativo</SelectItem>
                  <SelectItem value='Ferias'>Ferias</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select required>
                <SelectTrigger
                  value={user?.departament}
                  className='p-5 border border-gray-300 shadow-lg'
                >
                  <SelectValue placeholder='Selecione o departamento' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='Frontend'>Frontend</SelectItem>
                  <SelectItem value='Backend'>Backend</SelectItem>
                  <SelectItem value='Mobile'>Mobile</SelectItem>
                  <SelectItem value='Marketing'>Marketing</SelectItem>
                  <SelectItem value='Financeiro'>Financeiro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <button
              type='submit'
              className='bg-[#A243D2] py-3 flex justify-center items-center rounded-lg cursor-pointer text-white gap-3 font-bold'
            >
              <Save /> Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
