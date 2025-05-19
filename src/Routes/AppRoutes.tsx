import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Logon } from '../Pages/Logon'
export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Logon />} />
      </Routes>
    </BrowserRouter>
  )
}
