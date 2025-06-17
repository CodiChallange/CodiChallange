import { Aside } from '@/Components/Aside'

export function Relatorios() {
  return (
    <div className='flex h-screen'>
      <Aside />
      <div className='flex flex-col w-full p-5 bg-gray-100 gap-8 overflow-auto'>
        <div>Header- Eduardo</div>
        <div>Cards- Jander</div>
        <div>Toggle -Eduardo</div>
        <div>Grasficos -Jander</div>
        <div>Detalhamento -Eduardo</div>
      </div>
    </div>
  )
}
