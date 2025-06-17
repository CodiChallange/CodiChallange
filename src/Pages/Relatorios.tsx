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
            <div>
              <div>
                <div>Grafico 4 - Jander</div>
                <div>Grafico 5 - Jander</div>
              </div>

              <div>Detalhamento - Eduardo </div>
            </div>
          </TabsContent>
          {/* Tendências */}
          <TabsContent value='Td'>
            <div>
              <div>Grafico 6 - Jander</div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
