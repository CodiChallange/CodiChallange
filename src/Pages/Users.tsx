import { CodiLogo } from '@/assests/CodiLogo2'
import { Aside } from '@/Components/Aside'

import { UserCard } from '@/Components/UsersCard'

export function Users() {
  const userList = [
    { name: 'Eduardo Hill', role: 'ADM', email: 'eduardohill@gmail.com' },
    { name: 'Jander', role: 'FIN', email: 'eduardohill@gmail.com' },
    { name: 'Bruno', role: 'FIN', email: 'eduardohill@gmail.com' },
    { name: 'Hellison', role: 'PROF', email: 'eduardohill@gmail.com' },
    { name: 'Lucas', role: 'FIN', email: 'eduardohill@gmail.com' },
    { name: 'Vanessa', role: 'PROF', email: 'eduardohill@gmail.com' },
    { name: 'Gabriel', role: 'PROF', email: 'eduardohill@gmail.com' },
    { name: 'Max', role: 'FIN', email: 'eduardohill@gmail.com' },
    { name: 'Yuri', role: 'ADM', email: 'eduardohill@gmail.com' },
    { name: 'Cesar', role: 'FIN', email: 'eduardohill@gmail.com' },
    { name: 'Gustavo', role: 'PROF', email: 'eduardohill@gmail.com' },
  ]
  return (
    <div className='flex h-screen w-screen '>
      <Aside />
      <div className='flex flex-col w-full p-5'>
        <div className='flex justify-between w-full items-center h-fit'>
          <h1 className=' uppercase text-[#A243D2] text-4xl font-bold '>
            Sua Equipe
          </h1>
          <CodiLogo />
        </div>
        <div className='w-fit h-fit mb-3  '>
          <button className='bg-[#131836] text-white font-bold  rounded-lg p-4 cursor-pointer'>
            Adicionar Colaborador
          </button>
        </div>
        <div className=' h-full rounded-2xl border-6 border-[#A243D2] p-6 grid grid-cols-5 overflow-auto  gap-4  '>
          {userList.map((user) => (
            <UserCard key={user.email} name={user.name} role={user.role} />
          ))}
        </div>
      </div>
    </div>
  )
}
