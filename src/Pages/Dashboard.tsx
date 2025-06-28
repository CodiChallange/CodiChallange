import { InfoCard } from "@/Components/InfoCard";
import { Aside } from "@/Components/Aside";
import {
  BanknoteArrowDown,
  ChartNoAxesCombined,
  TrendingDown,
  TrendingUp,
  TrendingUpDown,
} from "lucide-react";
import { Button } from "@/Components/Button";
import { useNavigate } from "react-router-dom";

import { RangeCalendar } from "@/Components/RangeCalendar";

import { useEffect, useState } from "react";

import { getTotalSales, type totalSalesResponse } from "@/http/getTotalSales";

import {
  getTotalExpenses,
  type totalExpensesResponse,
} from "@/http/getTotalExpenses";
import { FiltroPorPeriodo } from "@/Components/FiltroPorPeriodo";
import { ToggleButton } from "./ToggleButton";

type Filtro = "semana" | "mes" | "ano";
export function Dashboard() {
  const [filtroSelecionado, setFiltroSelecionado] = useState<Filtro>("mes");

  //Navegação do card ações rápidas
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  //Funções para obter o total de vendas
  const [totalVendas, setTotalVendas] = useState<totalSalesResponse[]>([]);

  async function getTotalSale() {
    try {
      const result = await getTotalSales();
      setTotalVendas(result);
    } catch (error) {}
  }
  const totalSale = totalVendas.reduce((acc, vendas) => {
    return acc + vendas.valor;
  }, 0);

  useEffect(() => {
    getTotalSale();
  }, []);

  //Funções para obter o total de despesas

  const [totalDespesas, setTotalDespesas] = useState<totalExpensesResponse[]>(
    [],
  );
  async function getTotalExpense() {
    try {
      const result = await getTotalExpenses();
      setTotalDespesas(result);
    } catch (error) {}
  }
  const totalExpenses = totalDespesas.reduce((acc, expenses) => {
    return acc + expenses.valor;
  }, 0);

  useEffect(() => {
    getTotalExpense();
  }, []);

  // Calculo saldo liquido

  const saldoLiquido = totalSale - totalExpenses;

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 lg:flex-row">
      <Aside />
      <main className="w-full max-w-full flex-1 overflow-x-hidden px-4 py-6 lg:px-8">
        <div className="m-8 flex items-center justify-between p-4">
          <div>
            <h1 className="text-2xl font-bold">Dashboard Financeiro</h1>
            <p className="text-sm text-zinc-600">
              Visão geral das finanças da Codi Academy
            </p>
          </div>
          {/* Filtro por periodo e por data selecionada */}
          <div className="mr-8 flex flex-row gap-2 sm:flex">
            <FiltroPorPeriodo
              value={filtroSelecionado}
              onChange={setFiltroSelecionado}
            />
            <RangeCalendar />
          </div>
        </div>
        {/* Cards de resumos */}
        <section className="m-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard
            iconMain={TrendingUp}
            iconSecundary={ChartNoAxesCombined}
            name=" Total de Receitas"
            value={totalSale}
            color="green"
          />
          <InfoCard
            iconMain={TrendingDown}
            iconSecundary={BanknoteArrowDown}
            name=" Total de Despesas"
            value={totalExpenses}
            color="red"
          />
          <InfoCard
            iconMain={TrendingUpDown}
            iconSecundary={BanknoteArrowDown}
            name="Saldo Liquido"
            value={saldoLiquido}
            color="blue"
          />
        </section>
        {/* Gráfico */}

        <section className="mx-4 my-8 flex max-w-full flex-col overflow-x-auto rounded-lg border-2 border-purple-200 bg-purple-300 sm:p-6">
          <div className="mb-4 flex w-full justify-end">
            <ToggleButton
              filtro={filtroSelecionado}
              setFiltro={setFiltroSelecionado}
            />
          </div>
        </section>
        {/* Ações Rápidas */}
        <section className="m-8 flex flex-col rounded-lg border-2 border-purple-200 bg-purple-100 p-4 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <h3 className="text-xl font-semibold text-[#A243D2]">
              Ações Rapidas
            </h3>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <Button to="/vendas"> Nova Venda</Button>
            <Button to="/gastos"> Nova Despesa</Button>
            <Button to="/relatorios"> Ver Relatórios</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
