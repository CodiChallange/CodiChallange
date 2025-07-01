import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Logon } from "../Pages/Logon";
import { Dashboard } from "@/Pages/Dashboard";
import { Users } from "@/Pages/Team";
import { Configs } from "@/Pages/Configs";
import { Vendas } from "@/Pages/Vendas";
import { Relatorios } from "@/Pages/Relatorios";
import { Gastos } from "@/Pages/Gastos";
import { CodiStore } from "@/Pages/CodiStore";

import { CreateProduct } from "@/Forms/CreateProduct";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logon />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/users" element={<Users />} />
        <Route path="/gastos" element={<Gastos />} />
        <Route path="/configs" element={<Configs />} />
        <Route path="/codistore" element={<CodiStore />} />
        <Route path="/createproduct" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}
