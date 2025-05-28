import { GitCompareArrows, X } from 'lucide-react'

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
        <div className='flex justify-between items-center text-white mb-6'>
          <h1 className='text-xl font-semibold'>Alterar Cadastro</h1>
          <button
            className='cursor-pointer hover:text-red-800 '
            onClick={close}
          >
            <X />
          </button>
        </div>
        <div className='text-white space-y-2 justify-center items-center w-full flex flex-col'>
          <p className='flex flex-col items-center w-fit'>
            <strong className='text-[#A243D2] font-bold text-2xl'>ID:</strong>{' '}
            <span className='border border-[#A243D2] rounded-lg w-[200px] h-[30px] items-center justify-center flex bg-[#3a4061] '>
              {user?.id}
            </span>
          </p>
          <p className='flex flex-col items-center w-fit'>
            <strong className='text-[#A243D2] font-bold text-2xl'>Nome:</strong>{' '}
            <span className='border border-[#A243D2] rounded-lg w-[200px] h-[30px] items-center justify-center flex bg-[#3a4061] '>
              {user?.name}
            </span>
          </p>
          <p className='flex flex-col items-center w-fit'>
            <strong className='text-[#A243D2] font-bold text-2xl'>
              Email:
            </strong>{' '}
            <span className='border border-[#A243D2] rounded-lg w-[200px] h-[30px] items-center justify-center flex bg-[#3a4061] '>
              {user?.email}
            </span>
          </p>
          <div className='flex flex-col items-center w-fit'>
            <strong className='text-[#A243D2] font-bold text-2xl'>Role:</strong>{' '}
            <div className='flex gap-4 w-[250px] items-center ml-13'>
              <div className='border border-[#A243D2] rounded-lg w-[200px] h-[30px] items-center justify-center flex bg-[#3a4061] '>
                {user?.role}
              </div>
              <button className='w-auto border border-[#A243D2] rounded-[50%] p-2 bg-[#A243D2]'>
                <GitCompareArrows />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
