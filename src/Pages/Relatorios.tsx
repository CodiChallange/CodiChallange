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
          <TabsContent value='Vg'>Visao geral </TabsContent>
          <TabsContent value='Cp'>Comparativo</TabsContent>
          <TabsContent value='Ds'>Distribuição</TabsContent>
          <TabsContent value='Td'>Tendências</TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
