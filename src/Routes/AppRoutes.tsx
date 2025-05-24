import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Logon } from '../Pages/Logon'
import { SalesForm } from '../Forms/SalesForm'
export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Logon />} />
        <Route path= '/vendas' element={<SalesForm />} />
      </Routes>
    </BrowserRouter>
  )
}
