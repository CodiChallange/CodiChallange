import { X } from 'lucide-react'

type modalProps = {
  haandleOpenModalNew: () => void
}

export function ModalAdd({ haandleOpenModalNew }: modalProps) {
  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
      <div className=' relative max-w-xl w-full bg-zinc-800 p-10 rounded-2xl'>
        <div className='flex justify-between text-white'>
          <h1>Adicionar Colaborador</h1>
          <button onClick={haandleOpenModalNew}>
            <X />
          </button>
        </div>
      </div>
    </div>
  )
}
