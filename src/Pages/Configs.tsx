import { Switch } from '@/Components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/Components/ui/select'

import { Aside } from '@/Components/Aside'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs'
import {
  Bell,
  Building2,
  Camera,
  Dot,
  Mail,
  MapPin,
  Phone,
  Save,
  Shield,
  ShieldAlert,
  User,
} from 'lucide-react'
import Logo from '../assests/CodiLogoAside.png'
import { CardSessoes } from '@/Components/CardSessoes'
import { useState } from 'react'

const sessoesAtivas = [
  {
    dispositivo: 'Dispositivo atual',
    sistema: 'Chrome',
    cidade: 'São Paulo, SP',
    date: 'Agora',
    id: 1,
  },
  {
    dispositivo: 'iPhone de João',
    sistema: 'Safari iOS',
    cidade: 'Rio de Janeiro, RJ',
    date: 'Há 2 horas',
    id: 2,
  },
  {
    dispositivo: 'Notebook Dell',
    sistema: 'Firefox (Windows)',
    cidade: 'Belo Horizonte, MG',
    date: 'Ontem às 22:15',
    id: 3,
  },
]

const unidadesAtivas = [
  {
    unidade: 'Matriz - São Paulo',
    cidade: 'Av. Paulista, 1000 - São Paulo, SP',
    id: 1,
    status: 'Desconectado',
  },
  {
    unidade: 'Filial 1 - Rio de Janeiro',
    cidade: 'Rua das Flores, 200 - Rio de Janeiro, RJ',
    id: 2,
    status: 'Conectado e sincronizado',
  },
  {
    unidade: 'Filial 2 - Belo Horizonte',
    cidade: 'Av. Afonso Pena, 300 - Belo Horizonte, MG',
    id: 3,
    status: 'Conectado e sincronizado',
  },
  {
    unidade: 'Filial 3 - Brasília',
    cidade: 'SCS Quadra 1, Bloco A - Brasília, DF',
    id: 4,
    status: 'Desconectado',
  },
]

export function Configs() {
  const [selectedUnidade, setSelectedUnidade] = useState<string>('1')
  const unidadeSelecionada = unidadesAtivas.find(
    (unidade) => String(unidade.id) === selectedUnidade
  )
  return (
    <div className='flex h-screen bg-gray-100 '>
      <Aside />
      <div className='flex flex-col overflow-auto p-5 w-full gap-5'>
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
              {/* Area da Foto */}
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

              {/* Area dos inputs */}
              <div className='flex flex-col gap-8'>
                {/* Primeiro Grupo */}
                <div className='flex gap-9'>
                  {/* Nome */}
                  <div className='flex flex-col w-full'>
                    <label>Nome completo</label>
                    <div className='flex items-center gap-3 border px-3 py-2 rounded-lg'>
                      <User size={19} />
                      <input type='text' className='outline-none w-full' />
                    </div>
                  </div>
                  {/* E-mail */}
                  <div className='flex flex-col w-full'>
                    <label>E-mail</label>
                    <div className='flex items-center gap-3 border px-3 py-2  rounded-lg'>
                      <Mail size={19} />
                      <input type='text' className='outline-none w-full' />
                    </div>
                  </div>
                </div>
                {/* Segundo Grupo */}
                <div className='flex gap-9'>
                  {/* Telefone */}
                  <div className='flex flex-col w-full'>
                    <label>Telefone</label>
                    <div className='flex items-center gap-3 border px-3 py-2  rounded-lg'>
                      <Phone size={19} />
                      <input type='text' className='outline-none w-full' />
                    </div>
                  </div>
                  {/* Endereço */}
                  <div className='flex flex-col w-full'>
                    <label>Endereço</label>
                    <div className='flex items-center gap-3 border px-3 py-2  rounded-lg'>
                      <MapPin size={19} />
                      <input type='text' className='outline-none w-full' />
                    </div>
                  </div>
                </div>
              </div>
              {/* Button */}
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
            <div className='bg-white w-full flex flex-col rounded-lg py-7 px-12 gap-5'>
              <h1 className='text-black flex text-3xl font-semibold items-center gap-2'>
                <Bell size={32} />
                Preferências de Notificação
              </h1>
              <span className='font-semibold text-2xl'>
                Notificações por E-mail
              </span>

              {/* Primeiros inputs de notificações */}
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

              {/* Notificaçoes Push */}
              <div>
                <div className='flex flex-col'>
                  <span className='font-semibold text-2xl'>
                    Notificações Push
                  </span>
                  <div className=' pb-5 flex flex-col gap-3'>
                    {/* Vendas*/}
                    <div className='flex justify-between items-center'>
                      <div className='flex flex-col'>
                        <span className='font-bold'>Vendas</span>
                        <span className='text-gray-500'>
                          Notificações instantâneas sobre vendas
                        </span>
                      </div>
                      <div>
                        <Switch className='w-12 h-7 px-1'>
                          <div className='pointer-events-none left-1 top-1 h-5 w-5 rounded-full bg-white transition-transform  ' />
                        </Switch>
                      </div>
                    </div>
                    {/* Despesas */}
                    <div className='flex justify-between items-center'>
                      <div className='flex flex-col'>
                        <span className='font-bold'>Despesas</span>
                        <span className='text-gray-500'>
                          Notificações instâneas sobre despesas
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
              </div>
              {/* button */}
              <div className='flex  justify-end  '>
                <button className='flex gap-3 w-fit bg-[#A243D2] py-2 px-3 rounded-lg cursor-pointer font-bold'>
                  <Save />
                  Salvar Mudanças
                </button>
              </div>
            </div>
          </TabsContent>

          {/* Conteudo de Segurança */}
          <TabsContent value='securit'>
            {/* Div principal */}
            <div className='bg-white w-full flex flex-col rounded-lg py-7 px-12 gap-5'>
              {/* Header */}
              <div>
                <h1 className='text-black flex text-3xl font-semibold items-center gap-2'>
                  <Shield size={32} /> Segurança da Conta
                </h1>
              </div>

              {/* Area de inputs */}
              <div className='flex flex-col gap-5 border-b pb-8'>
                <h1 className='font-bold text-[20px] '>Alterar Senha</h1>
                {/* Primeira linha */}
                <div className='flex justify-between gap-3'>
                  {/* Senha atual */}
                  <div className='flex flex-col w-1/2'>
                    <label className='font-semibold'> Senha Atual</label>
                    <input
                      type='text'
                      placeholder='Digite sua senha atual'
                      className='border rounded-lg w-full p-2'
                    />
                  </div>
                  {/* Nova senha */}
                  <div className='flex flex-col w-1/2'>
                    <label> Nova Senha</label>
                    <input
                      type='text'
                      placeholder='Digite sua nova senha'
                      className='border rounded-lg w-full p-2'
                    />
                  </div>
                </div>

                {/* Segunda Linha */}
                <div className='flex flex-col w-1/2'>
                  <label className='font-semibold'> Confirmar Nova Senha</label>
                  <input
                    type='text'
                    placeholder='Digite sua nova senha'
                    className='border rounded-lg w-full p-2'
                  />
                </div>
              </div>

              {/* Area das Sessões Ativas */}
              <div className='flex flex-col gap-3'>
                <h1 className='font-bold text-[20px] '>Sessões Ativas</h1>
                <div className='flex flex-col gap-3 '>
                  {sessoesAtivas.map((sessao) => (
                    <CardSessoes
                      key={sessao.id}
                      id={sessao.id}
                      dispositivo={sessao.dispositivo}
                      cidade={sessao.cidade}
                      sistema={sessao.sistema}
                      date={sessao.date}
                    />
                  ))}
                </div>
              </div>

              {/* Button */}
              <div className='flex gap-3 justify-end'>
                <button className='font-semibold py-3 px-4 border rounded-lg cursor-pointer hover:bg-gray-100'>
                  Desconectar Todos
                </button>
                <button className='flex font-semibold py-3 px-4 border rounded-lg items-center gap-2 text-white bg-[#A243D2] cursor-pointer'>
                  <Save size={16} />
                  Alterar Senha
                </button>
              </div>
            </div>
          </TabsContent>

          {/* Conteudo de Unidades */}
          <TabsContent value='unit'>
            {/* Div Principal */}
            <div className='bg-white w-full flex flex-col rounded-lg py-7 px-12 gap-5'>
              {/* Header */}
              <div>
                <h1 className='text-black flex text-3xl font-semibold items-center gap-2'>
                  <Building2 size={32} /> Seleção de Unidade
                </h1>
              </div>
              {/* Seleção de unidade */}
              <div className='flex flex-col'>
                <h1 className='font-semibold'>Unidade Ativa</h1>
                <p className='text-gray-500'>
                  Selecione a unidade para visualizar os dados financeiros
                </p>

                <div className='border-b py-5'>
                  <Select
                    value={selectedUnidade}
                    onValueChange={(value) => setSelectedUnidade(value)}
                  >
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Unidades' />
                    </SelectTrigger>
                    <SelectContent>
                      {unidadesAtivas.map((unidade) => (
                        <SelectItem value={`${unidade.id}`}>
                          <div className='flex flex-col'>
                            <h1 className='font-bold'>{unidade.unidade} </h1>
                            <p className='text-gray-500'>{unidade.cidade} </p>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Unidade Selecionada */}
              <div className='flex flex-col gap-2 border-b pb-8'>
                <h1 className='font-semibold'>Unidade Selecionada</h1>
                {unidadeSelecionada && (
                  <div className='flex gap-5 items-center bg-[#F5F0FC] p-3 rounded-lg'>
                    <Building2 size={32} className='text-[#A243D2]' />
                    <div className='flex flex-col gap-2'>
                      <h1 className='font-bold'>
                        {unidadeSelecionada.unidade}
                      </h1>
                      <p className='text-[#A243D2] font-semibold'>
                        {unidadeSelecionada.cidade}
                      </p>
                      <span
                        className={`flex  items-center ${
                          unidadeSelecionada.status ==
                          'Conectado e sincronizado'
                            ? 'text-green-500'
                            : 'text-red-500'
                        } `}
                      >
                        <Dot /> {unidadeSelecionada.status}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Dados da unidade */}
              <div>
                <h1 className='font-semibold'>Informações da Unidade</h1>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-2'>
                    {/* Status */}
                    <div className='flex flex-col border rounded-lg p-5 w-1/2'>
                      <span className='text-gray-500'>Status</span>
                      <span className='text-green-500'>Ativo</span>
                    </div>
                    {/* Ultima sincronização */}
                    <div className='flex flex-col border rounded-lg p-5 w-1/2'>
                      <span className='text-gray-500'>
                        Última Sincronização
                      </span>
                      <span className='font-bold'>Ativo</span>
                    </div>
                  </div>
                  <div className='flex gap-2'>
                    {/* Vendas do Mês */}
                    <div className='flex flex-col border rounded-lg p-5 w-1/2'>
                      <span className='text-gray-500'>Vendas do Mês</span>
                      <span className='font-bold'>Ativo</span>
                    </div>
                    {/* Funcionarios */}
                    <div className='flex flex-col border rounded-lg p-5 w-1/2'>
                      <span className='text-gray-500'>Funcionários</span>
                      <span className='font-bold'>Ativo</span>
                    </div>
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
