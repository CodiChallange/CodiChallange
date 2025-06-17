import { Aside } from '@/Components/Aside'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/Components/ui/select'
import { Calendar, Download } from 'lucide-react'

export function Relatorios() {
  return (
    <div className='flex h-screen'>
      <Aside />
      <div className='flex flex-col w-full p-5 bg-gray-100 gap-8 overflow-auto'>
        <div className='flex justify-between items-center'>
          {/* Text Area */}
          <div className='flex flex-col gap-1 '>
            <h1 className='font-bold text-4xl '>Gestão de Equipe</h1>
            <p className='text-gray-500 text-[18px] '>
              Gerencie membros da equipe e suas informações
            </p>
          </div>
          {/* Filter Area */}
          <div className='flex gap-4 items-center'>
            <Select>
              <SelectTrigger className='w-[200px] items-center border border-gray-300 shadow-lg '>
                <SelectValue placeholder=' 6meses' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='6meses'>
                  <Calendar color='black' /> Ultimos 6 meses
                </SelectItem>
                <SelectItem value='umAno'>
                  <Calendar color='black' /> Um ano
                </SelectItem>
              </SelectContent>
            </Select>
            <button className='cursor-pointer flex text-[14px] gap-3 items-center justify-center px-2 border border-gray-300 rounded-lg py-1.5 shadow-lg'>
              <Download size={16} />
              Exportar
            </button>
          </div>
        </div>
        <div>Cards- Jander</div>
        <div>Toggle -Eduardo</div>
        <div>Grasficos -Jander</div>
        <div>Detalhamento -Eduardo</div>
      </div>
    </div>
  )
}
