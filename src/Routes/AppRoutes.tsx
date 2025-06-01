import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Logon } from '../Pages/Logon'
import { SalesForm } from '../Forms/SalesForm'
import { Dashboard } from '@/Pages/Dashboard'
import { Users } from '@/Pages/Team'
import { Configs } from '@/Pages/Configs'
import { Vendas } from '@/Pages/Vendas'
import { Relatorios } from '@/Pages/Relatorios'
import { Gastos } from '@/Pages/Gastos'
export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Logon />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/vendas' element={<SalesForm />} />
        <Route path='/venda' element={<Vendas />} />
        <Route path='/relatorios' element={<Relatorios />} />
        <Route path='/users' element={<Users />} />
        <Route path='/gastos' element={<Gastos />} />
        <Route path='/configs' element={<Configs />} />
      </Routes>
    </BrowserRouter>
  )
}
