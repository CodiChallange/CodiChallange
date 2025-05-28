import { useState } from 'react'
import { Home, Users, Settings, LogOut } from 'lucide-react'
import CodiIcon from '../assests/CodiLogoAside.png'
import { Link, useLocation } from 'react-router-dom'

type pathProps = {
  path: string | string[]
}

export function Aside() {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = [
    { icon: <Home />, label: 'Dashboards', path: '/dashboard' },
    { icon: <Users />, label: 'Equipe', path: '/users' },
    { icon: <Settings />, label: 'Configurações', path: '/configs' },
  ]

  const location = useLocation()
  const isActive = ({ path }: pathProps) => location.pathname === path

  return (
    <aside
      className={`flex flex-col items-center px-3 justify-between bg-[#131836] shadow-md transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div>
        {/* Header */}
        <div className='flex items-center justify-center h-16  '>
          {isOpen ? (
            <h1 className='text-xl font-semibold text-white flex justify-center items-center gap-2'>
              <img src={CodiIcon} alt='' className='w-[40px] h-[40px] ' />
              Codi Academy
            </h1>
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
                         ? 'text-[#A243D2] cursor-default '
                         : 'hover:bg-[#A243D2] text-white transition-colors cursor-pointer'
                     }`}
                >
                  <span className='text-xl'>{item.icon}</span>
                  {isOpen && <span className='text-base'>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className='flex px-2 py-4'>
        <a
          href='#'
          className='flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-[#6d28d9] text-white transition-colors'
        >
          <LogOut />
          {isOpen && <span className='text-base'>Sair</span>}
        </a>
      </div>
    </aside>
  )
}
