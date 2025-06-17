import { Aside } from '@/Components/Aside'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs'

export function Relatorios() {
  return (
    <div className='flex h-screen'>
      <Aside />
      <div className='flex flex-col w-full p-5 bg-gray-100 gap-8 overflow-auto'>
        <div>Header- Eduardo</div>
        <div>Cards- Jander</div>
        <Tabs defaultValue='account' className='w-[400px] text-black'>
          <TabsList>
            <TabsTrigger value='account'>Account</TabsTrigger>
            <TabsTrigger value='password'>Password</TabsTrigger>
          </TabsList>
          <TabsContent value='account'>
            Make changes to your account here.
          </TabsContent>
          <TabsContent value='password'>Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
