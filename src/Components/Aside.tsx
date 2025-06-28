import { useState } from 'react'
import {
  Home,
  Users,
  Settings,
  SunIcon,
  ShoppingCart,
  CreditCard,
  ChartPie,
} from 'lucide-react'
import CodiIcon from '../assests/CodiLogoAside.png'
import { Link, useLocation } from 'react-router-dom'

type pathProps = {
  path: string | string[]
}

export function Aside() {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = [
    {
      icon: <Home size={22} />,
      label: 'Dashboards',
      path: '/dashboard',
      count: '0',
    },
    {
      icon: <ShoppingCart size={22} />,
      label: 'Vendas',
      path: '/venda',
      count: '12',
    },
    {
      icon: <CreditCard size={22} />,
      label: 'Gastos',
      path: '/gastos',
      count: '0',
    },
    {
      icon: <ChartPie size={22} />,
      label: 'Relatórios',
      path: '/relatorios',
      count: '0',
    },
    { icon: <Users size={22} />, label: 'Equipe', path: '/users', count: '1' },
    {
      icon: <Settings size={22} />,
      label: 'Configurações',
      path: '/configs',
      count: '0',
    },
  ]

  const location = useLocation()
  const isActive = ({ path }: pathProps) => location.pathname === path

  return (
    <aside
      className={`flex flex-col items-center  justify-between bg-white shadow-md transition-all duration-300 ${
        isOpen ? 'w-72 absolute h-full md:relative' : 'w-20'
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className='w-full'>
        {/* Header */}
        <div className='flex items-center justify-center h-16 border-b  '>
          {isOpen ? (
            <div className='flex items-center gap-3'>
              <button onClick={() => setIsOpen(!isOpen)}>
                <img src={CodiIcon} alt='' className='w-[40px] h-[40px] ' />
              </button>
              <div className='flex flex-col items-baseline'>
                <h1 className='text-[18px] font-bold text-[#A243D2] flex justify-center items-center gap-2'>
                  Codi Cash
                </h1>
                <span className='text-[12px] '>Gestão Financeira</span>
              </div>
              <button className='flex hover:bg-gray-200 p-1 rounded-lg cursor-pointer'>
                <SunIcon size={18} />
              </button>
            </div>
          ) : (
            <img src={CodiIcon} alt='' className='w-[40px] h-[40px] ' />
          )}
        </div>

        {/* Menu */}
        <nav className='flex-1 px-2 py-4'>
          <ul className='flex flex-col gap-2'>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-4 px-3 py-3 rounded-lg  
                     ${
                       isActive({ path: item.path })
                         ? 'bg-[#A243D2] cursor-default text-white  '
                         : 'hover:bg-[#F5F0FC] hover:text-[#A243D2] text-[#404a59] transition-colors cursor-pointer'
                     }`}
                >
                  <span>{item.icon}</span>
                  {isOpen && (
                    <div className='w-full flex justify-between items-center  '>
                      <span className='font-bold'>{item.label}</span>
                      {item.count == '0' ? (
                        <span className='hidden '>{item.count} </span>
                      ) : (
                        <span
                          className='w-[30px] h-[30px] flex items-center justify-center
                         text-base text-[#A243D2] bg-[#f3e8ff]  rounded-[50%]  '
                        >
                          {item.count}{' '}
                        </span>
                      )}
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {isOpen && (
        <div className='flex px-2 py-4  w-full border-t'>
          <div className='bg-[#f3e8ff] w-full h-20 rounded-lg flex flex-col justify-center px-3'>
            <h1 className='text-black font-bold'>Codi Academy</h1>
            <p className='text-[#b26df0] text-[12px] font-bold '>
              Unidade Principal
            </p>
          </div>
        </div>
      )}
    </aside>
  )
}
