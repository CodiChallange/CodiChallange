import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Logon } from '../Pages/Logon'
import { SalesForm } from '../Forms/SalesForm'
import { Dashboard } from '@/Pages/Dashboard'
import { Users } from '@/Pages/Team'
import { Configs } from '@/Pages/Configs'
export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Logon />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/vendas' element={<SalesForm />} />
        <Route path='/users' element={<Users />} />
        <Route path='/configs' element={<Configs />} />
      </Routes>
    </BrowserRouter>
  )
}
