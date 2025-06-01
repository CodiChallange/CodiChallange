import { Calendar, Mail, Phone, SquarePen, Trash2 } from 'lucide-react'
import Logo from '../assests/CodiLogoAside.png'

type cardProps = {
  name: string
  key: string
  email: string
  departament: string
  phone: string
  status: string
  salario: number
  cargo: string
  onEdit: () => void
  onRemove: () => void
}

export function UserCard({
  name,
  email,
  departament,
  phone,
  status,
  cargo,
  salario,
  onEdit,
  onRemove,
}: cardProps) {
  return (
    <div className='flex flex-col bg-white w-[410px] p-3 gap-3 border rounded-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-1 '>
          <img src={Logo} alt='' className='w-10 h-10' />
          <div className='flex flex-col'>
            <h1 className='font-semibold'>{name}</h1>
            <p className='text-gray-500'>{cargo}</p>
          </div>
        </div>
        <div
          className={` px-2 py-0.5 rounded-2xl flex items-center justify-center ${
            status === 'Ativo' ? 'bg-green-100' : 'bg-yellow-100'
          }`}
        >
          <span
            className={`text-[14px] ${
              status === 'Ativo' ? ' text-green-800' : ' text-yellow-800'
            }`}
          >
            {status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className='flex flex-col gap-1 border-b pb-5'>
        <span className='flex text-gray-700 text-[14px] items-center gap-2 '>
          <Mail size={16} /> {email}
        </span>
        <span className='flex text-gray-700 text-[14px] items-center gap-2 '>
          <Phone size={16} /> {phone}
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
          <span className='text-gray-600 text-[14px] '>{departament}</span>
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-gray-900 text-[15px] font-semibold '>
            Salário:
          </span>
          <span className='text-[#A243D2] text-[14px] font-bold'>
            R$ {salario}
          </span>
        </div>
      </div>

      {/* Button area */}
      <div className='flex gap-2'>
        <button
          onClick={onEdit}
          className='flex border rounded-lg p-2 w-11/12 items-center justify-center gap-3 font-bold cursor-pointer hover:bg-gray-100'
        >
          <SquarePen />
          Editar
        </button>
        <button
          onClick={onRemove}
          className='flex border rounded-lg p-2 font-bold cursor-pointer hover:bg-gray-100 items-center justify-center text-red-500'
        >
          <Trash2 />
        </button>
      </div>
    </div>
  )
}
