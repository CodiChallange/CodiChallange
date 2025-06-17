import { Aside } from '@/Components/Aside'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs'

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
              <div>Cards - Eduardo</div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
