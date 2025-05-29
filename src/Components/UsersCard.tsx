import { Calendar, Mail, Phone, SquarePen, Trash2 } from 'lucide-react'
import Logo from '../assests/CodiLogoAside.png'

export function UserCard() {
  return (
    <div className='flex flex-col bg-white w-[550px] p-3 gap-3 border rounded-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-1 '>
          <img src={Logo} alt='' className='w-10 h-10' />
          <div className='flex flex-col'>
            <h1 className='font-semibold'>Eduardo Hill</h1>
            <p className='text-gray-500'>Instrutor</p>
          </div>
        </div>
        <div className='bg-green-100 px-2 py-0.5 rounded-2xl flex items-center justify-center'>
          <span className='text-[14px] text-green-800 '>Ativo</span>
        </div>
      </div>

      {/* Content */}
      <div className='flex flex-col gap-1 border-b pb-5'>
        <span className='flex text-gray-700 text-[14px] items-center gap-2 '>
          <Mail size={16} /> eduardohill@email.com
        </span>
        <span className='flex text-gray-700 text-[14px] items-center gap-2 '>
          <Phone size={16} /> (11) 99999-1111
        </span>
        <span className='flex text-gray-700 text-[14px] items-center gap-2 '>
          <Calendar size={16} /> Desde 14/01/2023
        </span>
      </div>

      {/* Data */}
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <span className='text-gray-900 text-[15px] font-semibold '>
            Departamento:
          </span>
          <span className='text-gray-600 text-[14px] '>Frontend</span>
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-gray-900 text-[15px] font-semibold '>
            Salário:
          </span>
          <span className='text-[#A243D2] text-[14px] font-bold'>R$ 1000</span>
        </div>
      </div>

      {/* Button area */}
      <div className='flex gap-2'>
        <button className='flex border rounded-lg p-2 w-11/12 items-center justify-center gap-3 font-bold cursor-pointer hover:bg-gray-100'>
          <SquarePen />
          Editar
        </button>
        <button className='flex border rounded-lg p-2 font-bold cursor-pointer hover:bg-gray-100 items-center justify-center text-red-500'>
          <Trash2 />
        </button>
      </div>
    </div>
  )
}
