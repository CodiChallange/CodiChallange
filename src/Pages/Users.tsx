import { CodiLogo } from '@/assests/CodiLogo2'
import { Aside } from '@/Components/Aside'
import { ModalAdd } from '@/Components/modal/AddModal'
import { AlterarModal } from '@/Components/modal/AlterarModal'
import { RemoverModal } from '@/Components/modal/RemoverModal'

import { UserCard } from '@/Components/UsersCard'
import { Search } from 'lucide-react'
import { useState } from 'react'

{
  /* tipos dos dados dos usuarios */
}
type User = {
  id: string
  name: string
  role: string
  email: string
}
export function Users() {
  {
    /* usState para abri modal de novo cadastro */
  }
  const [isOpenNew, setIsOpenNew] = useState(false)

  {
    /* Função para abrir o modal de novo cadastro */
  }
  function handleOpenModalNew() {
    setIsOpenNew(!isOpenNew)
  }

  {
    /* useState para abrir e fechar modal de edição */
  }
  const [isOpenEdit, setIsOpenEdit] = useState(false)

  {
    /* useState para pegar os dados do usuario selecionado */
  }
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  {
    /* função para abrir e pegar os dados do usuario selecionado */
  }
  function handleOpenModalEdit(userId: string) {
    setIsOpenEdit(true)
    setSelectedUser(userList.find((user) => user.id === userId) || null)
  }

  {
    /* useState para fechar o modal */
  }
  function handleCloseModalEdit() {
    setIsOpenEdit(false)
    setSelectedUser(null)
  }

  const [isOpenRemove, setIsOpenRemove] = useState(false)
  function handleOpenRemoveModal(userId: string) {
    setIsOpenRemove(true)
    setSelectedUser(userList.find((user) => user.id === userId) || null)
  }
  function handleCloseModalRemove() {
    setIsOpenRemove(false)
    setSelectedUser(null)
  }

  const userList = [
    { name: 'Eduardo', role: 'ADM', email: 'eduardo@gmail.com', id: '1' },
    { name: 'Jander', role: 'FIN', email: 'Jander@gmail.com', id: '2' },
    { name: 'Bruno', role: 'FIN', email: 'Bruno@gmail.com', id: '3' },
    { name: 'Hellison', role: 'PROF', email: 'Hellison@gmail.com', id: '4' },
    { name: 'Lucas', role: 'FIN', email: 'Lucas@gmail.com', id: '5' },
    { name: 'Vanessa', role: 'PROF', email: 'Vanessa@gmail.com', id: '6' },
    { name: 'Gabriel', role: 'PROF', email: 'Gabriel@gmail.com', id: '7' },
    { name: 'Max', role: 'FIN', email: 'Max@gmail.com', id: '8' },
    { name: 'Yuri', role: 'ADM', email: 'Yuri@gmail.com', id: '9' },
    { name: 'Cesar', role: 'FIN', email: 'Cesar@gmail.com', id: '10' },
    { name: 'Gustavo', role: 'PROF', email: 'Gustavo@gmail.com', id: '11' },
  ]
  return (
    <div className='relative'>
      <div className='flex lg:h-screen w-screen md:h-full '>
        <Aside />
        <div className='flex flex-col w-full p-5'>
          <div className='flex justify-between w-full items-center h-fit'>
            <h1 className=' uppercase text-[#A243D2] text-4xl font-bold '>
              Sua Equipe
            </h1>
            <CodiLogo />
          </div>
          <div className='w-full h-fit mb-3 justify-between items-center flex '>
            <button
              onClick={handleOpenModalNew}
              className='bg-[#131836] text-white font-bold  rounded-lg p-4 cursor-pointer'
            >
              Adicionar Colaborador
            </button>
            <div className='group relative max-w-12 hover:max-w-[300px] transition-all duration-300 ease-in-out bg-black rounded-full p-2 flex items-center'>
              <Search className='text-white ' />
              <input
                type='text'
                placeholder='Search...'
                className='w-0 group-hover:w-full px-0 group-hover:px-4 overflow-hidden transition-all duration-300 ease-in-out bg-transparent outline-none border-none placeholder-white text-white'
              />
            </div>
          </div>
          <div className=' h-full rounded-2xl border-6 border-[#A243D2] p-6 overflow-auto  gap-4 grid lg:grid-cols-5 md:grid-cols-1   '>
            {userList.map((user) => (
              <UserCard
                key={user.id}
                name={user.name}
                role={user.role}
                onEdit={() => handleOpenModalEdit(user.id)}
                onRemove={() => handleOpenRemoveModal(user.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Renderizando os modais na tela */}
      {isOpenNew && <ModalAdd haandleOpenModalNew={handleOpenModalNew} />}
      {isOpenEdit && (
        <AlterarModal close={handleCloseModalEdit} user={selectedUser} />
      )}
      {isOpenRemove && (
        <RemoverModal close={handleCloseModalRemove} user={selectedUser} />
      )}
    </div>
  )
}
