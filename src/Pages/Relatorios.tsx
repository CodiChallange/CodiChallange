import { Aside } from '@/Components/Aside'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs'
import { Percent, Plus } from 'lucide-react'

export function Relatorios() {
  return (
    <div className='flex h-screen'>
      <Aside />
      <div className='flex flex-col w-full p-5 bg-gray-100 gap-8 overflow-auto'>
        <div>Header- Eduardo</div>
        <div>Cards- Jander</div>
        <Tabs defaultValue='Vg' className='w-full text-black'>
          <TabsList className='flex bg-gray-200 w-full h-fit '>
            <TabsTrigger value='Vg'>Visão Geral</TabsTrigger>
            <TabsTrigger value='Cp'>Comparativo</TabsTrigger>
            <TabsTrigger value='Ds'>Distribuição</TabsTrigger>
            <TabsTrigger value='Td'>Tendências</TabsTrigger>
          </TabsList>
          {/* Visao Geral */}
          <TabsContent value='Vg'>
            <div className='flex'>
              <div>Grafico 1 - Jander</div> <div>Grafico 2 - Jander</div>
            </div>
          </TabsContent>
          {/* Comparativo */}
          <TabsContent value='Cp'>
            <div>Grafico 3 - Jander</div>
          </TabsContent>
          {/* Distribuição */}
          <TabsContent value='Ds'>
            <div className='flex flex-col'>
              <div className='flex'>
                <div>Grafico 4 - Jander</div>
                <div>Grafico 5 - Jander</div>
              </div>
              {/* Detalhamento de gastos */}
              <div className='flex flex-col gap-4 bg-white rounded-lg p-3'>
                <h1 className='font-bold text-2xl'>Detalhamento de Gastos</h1>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='flex items-center justify-between border border-gray-300 rounded-lg px-5 py-1.5'>
                    <div className='flex gap-3 items-center'>
                      <div className='w-4 h-4 rounded-[100%] bg-purple-500 '></div>
                      <span className='font-semibold'>Aluguel</span>
                    </div>
                    <span className='text-red-500 font-bold'>R$ 15.000,00</span>
                  </div>
                  <div className='flex items-center justify-between border border-gray-300 rounded-lg px-5 py-1.5'>
                    <div className='flex gap-3 items-center'>
                      <div className='w-4 h-4 rounded-[100%] bg-red-500 '></div>
                      <span className='font-semibold'>Folha de Pagamento</span>
                    </div>
                    <span className='text-red-500 font-bold'>R$ 15.000,00</span>
                  </div>
                  <div className='flex items-center justify-between border border-gray-300 rounded-lg px-5 py-1.5'>
                    <div className='flex gap-3 items-center'>
                      <div className='w-4 h-4 rounded-[100%] bg-yellow-500 '></div>
                      <span className='font-semibold'>Energia</span>
                    </div>
                    <span className='text-red-500 font-bold'>R$ 15.000,00</span>
                  </div>
                  <div className='flex items-center justify-between border border-gray-300 rounded-lg px-5 py-1.5'>
                    <div className='flex gap-3 items-center'>
                      <div className='w-4 h-4 rounded-[100%] bg-green-500 '></div>
                      <span className='font-semibold'>Internet</span>
                    </div>
                    <span className='text-red-500 font-bold'>R$ 15.000,00</span>
                  </div>
                  <div className='flex items-center justify-between border border-gray-300 rounded-lg px-5 py-1.5'>
                    <div className='flex gap-3 items-center'>
                      <div className='w-4 h-4 rounded-[100%] bg-blue-500'></div>
                      <span className='font-semibold'>Manutenção</span>
                    </div>
                    <span className='text-red-500 font-bold'>R$ 15.000,00</span>
                  </div>
                  <div className='flex items-center justify-between border border-gray-300 rounded-lg px-5 py-1.5'>
                    <div className='flex gap-3 items-center'>
                      <div className='w-4 h-4 rounded-[100%] bg-cyan-500 '></div>
                      <span className='font-semibold'>Suprimentos</span>
                    </div>
                    <span className='text-red-500 font-bold'>R$ 15.000,00</span>
                  </div>
                  <div className='flex items-center justify-between border border-gray-300 rounded-lg px-5 py-1.5'>
                    <div className='flex gap-3 items-center'>
                      <div className='w-4 h-4 rounded-[100%] bg-emerald-500 '></div>
                      <span className='font-semibold'>Marketing</span>
                    </div>
                    <span className='text-red-500 font-bold'>R$ 15.000,00</span>
                  </div>
                  <div className='flex items-center justify-between border border-gray-300 rounded-lg px-5 py-1.5'>
                    <div className='flex gap-3 items-center'>
                      <div className='w-4 h-4 rounded-[100%] bg-gray-500'></div>
                      <span className='font-semibold'>Outros</span>
                    </div>
                    <span className='text-red-500 font-bold'>R$ 15.000,00</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          {/* Tendências */}
          <TabsContent value='Td'>
            <div className='flex flex-col'>
              <div>Grafico 6 - Jander </div>
              {/* Cards Area */}
              <div className='flex gap-3'>
                <div className='flex flex-col bg-green-100 border border-green-300 rounded-lg p-4 gap-2 w-full'>
                  <h3 className='text-green-900 font-bold'>
                    Crescimento de Receitas
                  </h3>
                  <span className='flex items-center text-2xl font-bold text-green-900'>
                    <Plus size={24} />
                    49
                    <Percent size={24} />
                  </span>
                  <p className='text-green-700 text-[14px] '>
                    Comparado ao período anterior
                  </p>
                </div>
                <div className='flex flex-col bg-yellow-100 border border-yellow-300 rounded-lg p-4 gap-2 w-full'>
                  <h3 className='text-yellow-900 font-bold'>
                    Controle de Gastos
                  </h3>
                  <span className='flex items-center text-2xl font-bold text-yellow-900'>
                    <Plus size={24} />
                    49
                    <Percent size={24} />
                  </span>
                  <p className='text-yellow-700 text-[14px] '>
                    Aumento controlado dos gastos
                  </p>
                </div>
                <div className='flex flex-col bg-blue-100 border border-blue-300 rounded-lg p-4 gap-2 w-full'>
                  <h3 className='text-blue-900 font-bold'>
                    Melhoria da Margem
                  </h3>
                  <span className='flex items-center text-2xl font-bold text-blue-900'>
                    <Plus size={24} />
                    49
                    <Percent size={24} />
                  </span>
                  <p className='text-blue-700 text-[14px] '>
                    Crescimento do lucro líquido
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
