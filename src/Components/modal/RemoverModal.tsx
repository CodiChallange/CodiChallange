import { X } from 'lucide-react'
type modalProps = {
  handleOpenModalAdd: () => void
}

export function RemoverModal({ handleOpenModalAdd }: modalProps) {
  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
      <div className=' relative max-w-xl w-full bg-zinc-800 p-10 rounded-2xl'>
        <div className='flex justify-between text-white'>
          <h1>Remover Colaborador</h1>
          <button onClick={handleOpenModalAdd}>
            <X />
          </button>
        </div>
      </div>
    </div>
  )
}
