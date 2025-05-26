import { useState } from 'react'
import { Home, Users, Settings, LogOut } from 'lucide-react'
import CodiIcon from '../assests/CodiLogoAside.png'

export function App() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { icon: <Home />, label: 'Dashboards' },
    { icon: <Users />, label: 'Equipe' },
    { icon: <Settings />, label: 'Configurações' },
  ]

  return (
    <div className='flex min-h-screen w-full bg-neutral-100'>
      <aside
        className={`flex flex-col items-center justify-between bg-[#131836] shadow-md transition-all duration-300 ${
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
                  <a
                    href='#'
                    className='flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-[#6d28d9] text-white transition-colors'
                  >
                    <span className='text-xl'>{item.icon}</span>
                    {isOpen && <span className='text-base'>{item.label}</span>}
                  </a>
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

      {/* Content */}
      <div className='flex-1 p-8'>
        <h1 className='text-3xl font-bold text-amber-700'>Dashboard</h1>
        <p className='mt-4 text-neutral-700'>
          Conteúdo principal aqui. Sidebar abre no hover e fecha
          automaticamente.
        </p>
      </div>
    </div>
  )
}
