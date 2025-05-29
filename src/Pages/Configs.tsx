import { Switch } from '@/Components/ui/switch'
import { Aside } from '@/Components/Aside'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs'
import {
  Bell,
  Building2,
  Camera,
  Mail,
  MapPin,
  Phone,
  Save,
  ShieldAlert,
  User,
} from 'lucide-react'
import Logo from '../assests/CodiLogoAside.png'

export function Configs() {
  return (
    <div className='flex h-screen bg-gray-100 '>
      <Aside />
      <div className='flex flex-col overflow-auto p-5 w-full gap-10'>
        {/* Header */}
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-4xl '>Configurações</h1>
          <p className='text-gray-500 text-[18px] '>
            Gerencie suas preferências e configurações do sistema
          </p>
        </div>

        {/* Select area */}
        <Tabs defaultValue='account' className='w-full '>
          <TabsList className='flex bg-gray-200 w-full h-fit '>
            <TabsTrigger value='account' className='cursor-pointer py-2'>
              <User /> Perfil
            </TabsTrigger>
            <TabsTrigger value='notification' className='cursor-pointer'>
              <Bell /> Notificações
            </TabsTrigger>
            <TabsTrigger value='securit' className='cursor-pointer'>
              <ShieldAlert /> Segurança
            </TabsTrigger>
            <TabsTrigger value='unit' className='cursor-pointer'>
              <Building2 /> Unidades
            </TabsTrigger>
          </TabsList>
          {/* Conteudo de perfil */}
          <TabsContent value='account'>
            <div className='bg-white w-full flex flex-col rounded-lg py-7 px-12 gap-8'>
              <h1 className='text-black flex text-4xl font-semibold items-center gap-2'>
                <User size={32} />
                Informações Pessoais
              </h1>
              <div className='flex items-center gap-5 border-b pb-10'>
                <img src={Logo} alt='' className='w-24 h-24 ' />
                <div className='flex flex-col gap-1'>
                  <button className='flex items-center justify-center gap-3 border rounded-lg p-2 cursor-pointer hover:bg-gray-100 text-[15px] font-bold '>
                    <Camera /> Alterar Foto{' '}
                  </button>
                  <p className='text-[14px] text-gray-500 '>
                    JPG, PNG ou GIF (máx. 2MB)
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-8'>
                <div className='flex gap-9'>
                  <div className='flex flex-col w-full'>
                    <label>Nome completo</label>
                    <div className='flex items-center gap-3 border px-3 py-2 rounded-lg'>
                      <User size={19} />
                      <input type='text' className='outline-none w-full' />
                    </div>
                  </div>
                  <div className='flex flex-col w-full'>
                    <label>E-mail</label>
                    <div className='flex items-center gap-3 border px-3 py-2  rounded-lg'>
                      <Mail size={19} />
                      <input type='text' className='outline-none w-full' />
                    </div>
                  </div>
                </div>
                <div className='flex gap-9'>
                  <div className='flex flex-col w-full'>
                    <label>Telefone</label>
                    <div className='flex items-center gap-3 border px-3 py-2  rounded-lg'>
                      <Phone size={19} />
                      <input type='text' className='outline-none w-full' />
                    </div>
                  </div>
                  <div className='flex flex-col w-full'>
                    <label>Endereço</label>
                    <div className='flex items-center gap-3 border px-3 py-2  rounded-lg'>
                      <MapPin size={19} />
                      <input type='text' className='outline-none w-full' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex  justify-end  '>
                <button className='flex gap-3 w-fit bg-[#A243D2] py-2 px-3 rounded-lg cursor-pointer font-bold'>
                  <Save />
                  Salvar Mudanças
                </button>
              </div>
            </div>
          </TabsContent>

          {/* Conteudo de notificações */}
          <TabsContent value='notification'>
            <div className='bg-white w-full flex flex-col rounded-lg py-7 px-12 gap-8'>
              <h1 className='text-black flex text-3xl font-semibold items-center gap-2'>
                <Bell size={32} />
                Preferências de Notificação
              </h1>
              <span className='font-semibold text-2xl'>
                Notificações por E-mail
              </span>

              <div className='border-b pb-5 flex flex-col gap-3'>
                {/* Novas vendas */}
                <div className='flex justify-between items-center'>
                  <div className='flex flex-col'>
                    <span className='font-bold'>Novas vendas</span>
                    <span className='text-gray-500'>
                      Receber e-mail quando uma nova venda for registrada
                    </span>
                  </div>
                  <div>
                    <Switch className='w-12 h-7 px-1'>
                      <div className='pointer-events-none left-1 top-1 h-5 w-5 rounded-full bg-white transition-transform  ' />
                    </Switch>
                  </div>
                </div>

                {/* Novas Despesas */}
                <div className='flex justify-between items-center'>
                  <div className='flex flex-col'>
                    <span className='font-bold'>Novas Despesas</span>
                    <span className='text-gray-500'>
                      Receber e-mail quando uma nova despesa for registrada
                    </span>
                  </div>
                  <div>
                    <Switch className='w-12 h-7 px-1'>
                      <div className='pointer-events-none left-1 top-1 h-5 w-5 rounded-full bg-white transition-transform  ' />
                    </Switch>
                  </div>
                </div>

                {/* Relatorios Mensais */}
                <div className='flex justify-between items-center'>
                  <div className='flex flex-col'>
                    <span className='font-bold'>Relatórios Mensais</span>
                    <span className='text-gray-500'>
                      Receber relátorio mensal por e-mail
                    </span>
                  </div>
                  <div>
                    <Switch className='w-12 h-7 px-1'>
                      <div className='pointer-events-none left-1 top-1 h-5 w-5 rounded-full bg-white transition-transform  ' />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
