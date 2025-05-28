import { X } from 'lucide-react'

type User = {
  id: string
  name: string
  role: string
  email: string
}

type modalProps = {
  close: () => void
  user: User | null
}

export function AlterarModal({ close, user }: modalProps) {
  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
      <div className='relative max-w-xl w-full bg-[#131836] p-10 rounded-2xl'>
        <div className='flex justify-between items-center text-[#A243D2] mb-6'>
          <h1 className='text-xl font-semibold'>Alterar Cadastro</h1>
          <button onClick={close}>
            <X className='w-6 h-6' />
          </button>
        </div>
        <div className='text-white space-y-2'>
          <p className='flex flex-col  w-fit'>
            <strong>Nome:</strong> {user?.name}
          </p>
          <p className='flex flex-col  w-fit'>
            <strong>Email:</strong> {user?.email}
          </p>
          <p className='flex flex-col  w-fit'>
            <strong>Role:</strong> {user?.role}
          </p>
          <p className='flex flex-col  w-fit'>
            <strong>ID:</strong> {user?.id}
          </p>
        </div>
      </div>
    </div>
  )
}
