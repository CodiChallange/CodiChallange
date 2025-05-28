import { X } from 'lucide-react'
import { useState } from 'react'
type modalProps = {
  close: () => void
  user: User | null
}
type User = {
  id: string
  name: string
  role: string
  email: string
}

export function RemoverModal({ close, user }: modalProps) {
  const [isPress, setIsPress] = useState(false)

  function handlePressButton() {
    setIsPress(true)
  }
  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
      <div className=' relative flex flex-col max-w-xl w-full bg-zinc-800 p-10 rounded-2xl'>
        <div className='flex justify-between items-center text-white mb-6'>
          <h1 className='text-xl font-semibold'>Alterar Cadastro</h1>
          <button
            className='cursor-pointer hover:text-red-800 '
            onClick={close}
          >
            <X />
          </button>
        </div>
        <div className='flex justify-baseline w-full '>
          <div className='text-white space-y-2 justify-center items-center w-1/2 flex flex-col'>
            <p className='flex flex-col items-center w-fit'>
              <strong className='text-[#A243D2] font-bold text-2xl'>ID:</strong>{' '}
              <span className='border border-[#A243D2] rounded-lg w-[200px] h-[30px] items-center justify-center flex bg-[#3a4061] '>
                {user?.id}
              </span>
            </p>
            <p className='flex flex-col items-center w-fit'>
              <strong className='text-[#A243D2] font-bold text-2xl'>
                Nome:
              </strong>{' '}
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
              <strong className='text-[#A243D2] font-bold text-2xl'>
                Role:
              </strong>{' '}
              <div className='flex gap-4 w-[250px] items-center ml-13'>
                <div className='border border-[#A243D2] rounded-lg w-[200px] h-[30px] items-center justify-center flex bg-[#3a4061] '>
                  {user?.role}
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-1 '>
            <div className='flex flex-col gap-0.5'>
              <h1 className='text-xl font-semibold text-white'>
                Deseja remover usuario?
              </h1>
              <button
                onClick={handlePressButton}
                className='w-full bg-red-700 p-2 items-center rounded-lg flex justify-center font-bold cursor-pointer hover:bg-red-800'
              >
                Remover
              </button>
            </div>
            <div>
              {isPress && (
                <form className='flex flex-col gap-3'>
                  <label className='text-xl font-semibold text-white'>
                    Digite o nome do usuario
                  </label>
                  <input
                    type='text'
                    className='bg-white text-black w-full rounded-lg outline-4 outline-[#A243D2] '
                  />
                  <button
                    type='submit'
                    className='w-full bg-red-700 p-2 items-center rounded-lg flex justify-center font-bold cursor-pointer hover:bg-red-800'
                  >
                    Remover
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
