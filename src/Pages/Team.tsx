import { Aside } from '@/Components/Aside'
import { ModalAdd } from '@/Components/modal/AddModal'
import { AlterarModal } from '@/Components/modal/AlterarModal'
import { RemoverModal } from '@/Components/modal/RemoverModal'
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from '@/Components/ui/select'
import { UserCard } from '@/Components/UsersCard'
import { Search, UserPlus } from 'lucide-react'
import { useState } from 'react'

{
  /* tipos dos dados dos usuarios */
}
type User = {
  id: string
  name: string
  email: string
  phone: string
  departament: string
  status: string
  cargo: string
  salario: number
}
const userList = [
  {
    id: '1',
    name: 'Mariana Silva',
    email: 'mariana.silva@gmail.com',
    phone: '(11) 98888-1234',
    departament: 'Frontend',
    cargo: 'Instrutor',
    salario: 5500,
    status: 'Ativo',
  },
  {
    id: '2',
    name: 'Carlos Souza',
    email: 'carlos.souza@gmail.com',
    phone: '(21) 97777-4321',
    departament: 'Backend',
    cargo: 'Coordenador',
    salario: 8500,
    status: 'Ativo',
  },
  {
    id: '3',
    name: 'Fernanda Lima',
    email: 'fernanda.lima@gmail.com',
    phone: '(31) 96666-9876',
    departament: 'Mobile',
    cargo: 'Assistente',
    salario: 4200,
    status: 'Férias',
  },
  {
    id: '4',
    name: 'Rafael Costa',
    email: 'rafael.costa@gmail.com',
    phone: '(41) 95555-6543',
    departament: 'Marketing',
    cargo: 'Gerente',
    salario: 9500,
    status: 'Ativo',
  },
  {
    id: '5',
    name: 'Isabela Martins',
    email: 'isabela.martins@gmail.com',
    phone: '(51) 94444-3210',
    departament: 'Financeiro',
    cargo: 'Assistente',
    salario: 4700,
    status: 'Ativo',
  },
  {
    id: '6',
    name: 'Lucas Almeida',
    email: 'lucas.almeida@gmail.com',
    phone: '(61) 93333-1122',
    departament: 'Frontend',
    cargo: 'Instrutor',
    salario: 5200,
    status: 'Férias',
  },
  {
    id: '7',
    name: 'Ana Pereira',
    email: 'ana.pereira@gmail.com',
    phone: '(71) 92222-3344',
    departament: 'Backend',
    cargo: 'Coordenador',
    salario: 8300,
    status: 'Ativo',
  },
  {
    id: '8',
    name: 'Bruno Fernandes',
    email: 'bruno.fernandes@gmail.com',
    phone: '(81) 91111-5566',
    departament: 'Mobile',
    cargo: 'Instrutor',
    salario: 5700,
    status: 'Ativo',
  },
  {
    id: '9',
    name: 'Patrícia Gomes',
    email: 'patricia.gomes@gmail.com',
    phone: '(91) 98888-7788',
    departament: 'Marketing',
    cargo: 'Assistente',
    salario: 4600,
    status: 'Férias',
  },
  {
    id: '10',
    name: 'Gabriel Rocha',
    email: 'gabriel.rocha@gmail.com',
    phone: '(85) 97777-8899',
    departament: 'Financeiro',
    cargo: 'Gerente',
    salario: 9800,
    status: 'Ativo',
  },
]

export function Users() {
  {
    /* Cadastro de novo user */
  }
  const [isOpenNew, setIsOpenNew] = useState(false)
  function handleOpenModalNew() {
    setIsOpenNew(!isOpenNew)
  }

  {
    /* Achar user */
  }
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  {
    /* Modal de editar usuario */
  }
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  function handleOpenModalEdit(userId: string) {
    setIsOpenEdit(true)
    setSelectedUser(userList.find((user) => user.id === userId) || null)
  }
  function handleCloseModalEdit() {
    setIsOpenEdit(false)
    setSelectedUser(null)
  }

  {
    /* Modal de remover */
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

  {
    /* Sistema de filtro */
  }
  const [selectedCargo, setSelectedCargo] = useState<string>('all')
  const filteredUsers =
    selectedCargo === 'all'
      ? userList
      : userList.filter((user) => user.cargo === selectedCargo)

  const totalMembros = filteredUsers.length
  const membrosAtivos = filteredUsers.filter(
    (user) => user.status === 'Ativo'
  ).length
  const departamentosUnicos = new Set(
    filteredUsers.map((user) => user.departament)
  )
  const totalDepartamentos = departamentosUnicos.size
  const folhaPagamento = filteredUsers.reduce(
    (acc, user) => acc + user.salario,
    0
  )

  return (
    <div className='flex h-screen'>
      <Aside />

      <div className='flex flex-col w-full p-5 bg-gray-100 gap-8 overflow-auto'>
        {/* Header */}
        <div className=' flex justify-between items-center'>
          <div className='flex flex-col gap-1 '>
            <h1 className='font-bold text-4xl '>Gestão de Equipe</h1>
            <p className='text-gray-500 text-[18px] '>
              Gerencie membros da equipe e suas informações
            </p>
          </div>
          <div className=''>
            <button
              onClick={handleOpenModalNew}
              className='flex gap-2 bg-[#A243D2] px-5 py-3 rounded-lg text-white'
            >
              <UserPlus />
              <span>Novo Membro</span>
            </button>
          </div>
        </div>

        {/* input */}
        <div className='flex w-full bg-white shadow rounded-lg p-5 gap-4 '>
          <div className='flex border items-center w-5/6 py-2 px-3 rounded-lg gap-3'>
            <Search />
            <input
              type='text'
              placeholder='Buscar por nome ou e-mail...'
              className='w-full outline-none'
            />
          </div>
          <div className='w-1/6 h-full '>
            <Select
              value={selectedCargo}
              onValueChange={(value) => setSelectedCargo(value)}
            >
              <SelectTrigger className='flex w-full  p-5  '>
                <SelectValue placeholder='Todos os cargos' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>Todos os cargos</SelectItem>
                <SelectItem value='Instrutor'>Instrutor</SelectItem>
                <SelectItem value='coordenador'>Coordenador</SelectItem>
                <SelectItem value='Assistente'>Assistente</SelectItem>
                <SelectItem value='Gerente'>Gerente</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-3 gap-5  '>
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              departament={user.departament}
              email={user.email}
              phone={user.phone}
              status={user.status}
              salario={user.salario}
              cargo={user.cargo}
              onEdit={() => handleOpenModalEdit(user.id)}
              onRemove={() => handleOpenRemoveModal(user.id)}
            />
          ))}
        </div>

        {/* Dados */}
        <div className='grid grid-cols-4 gap-4'>
          <div className='flex flex-col items-center justify-center bg-white border rounded-lg h-34'>
            <span className='text-[#A243D2] font-bold text-4xl'>
              {totalMembros}
            </span>
            <span>Total de Membros</span>
          </div>
          <div className='flex flex-col items-center justify-center bg-white border rounded-lg h-34'>
            <span className='text-green-600 font-bold text-4xl'>
              {membrosAtivos}{' '}
            </span>
            <span>Membros ativos</span>
          </div>
          <div className='flex flex-col items-center justify-center bg-white border rounded-lg h-34'>
            <span className='text-blue-600 font-bold text-4xl'>
              {totalDepartamentos}
            </span>
            <span>Departamentos</span>
          </div>
          <div className='flex flex-col items-center justify-center bg-white border rounded-lg h-34'>
            <span className='text-orange-600 font-bold text-4xl '>
              {folhaPagamento.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <span>Folha de pagamento</span>
          </div>
        </div>
      </div>

      {/* Renderizando os modais na tela */}
      <div>
        {isOpenNew && <ModalAdd haandleOpenModalNew={handleOpenModalNew} />}
        {isOpenEdit && (
          <AlterarModal close={handleCloseModalEdit} user={selectedUser} />
        )}
        {isOpenRemove && (
          <RemoverModal close={handleCloseModalRemove} user={selectedUser} />
        )}
      </div>
    </div>
  )
}
