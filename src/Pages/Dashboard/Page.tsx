import { InfoCard } from "@/Components/Dashboard/InfoCard";
import { Aside } from "@/Components/Aside";
import {
  BanknoteArrowDown,
  ChartNoAxesCombined,
  TrendingDown,
  TrendingUp,
  TrendingUpDown,
} from "lucide-react";
import { Button } from "@/Components/Dashboard/Button";

import { RangeCalendar } from "@/Components/Dashboard/RangeCalendar";

import { useEffect, useState } from "react";

import { getTotalSales, type totalSalesResponse } from "@/http/getTotalSales";

import {
  getTotalExpenses,
  type totalExpensesResponse,
} from "@/http/getTotalExpenses";
import { FiltroPorPeriodo } from "@/Components/Dashboard/FiltroPorPeriodo";
import { ToggleButton } from "../../Components/Dashboard/ToggleButton";

type Filter = "semana" | "mes" | "ano";
export function Dashboard() {
  const [selectedFilter, setselectedFilter] = useState<Filter>("mes");

  //Navegação do card ações rápidas

  //Funções para obter o total de vendas
  const [totalSales, setTotalSales] = useState<totalSalesResponse[]>([]);

  async function getTotalSale() {
    try {
      const result = await getTotalSales();
      setTotalSales(result);
    } catch (error) {}
  }
  const totalSale = totalSales.reduce((acc, sales) => {
    return acc + sales.valor;
  }, 0);

  useEffect(() => {
    getTotalSale();
  }, []);

  //Funções para obter o total de despesas

  const [totalExpenses, setTotalExpenses] = useState<totalExpensesResponse[]>(
    [],
  );
  async function getTotalExpense() {
    try {
      const result = await getTotalExpenses();
      setTotalExpenses(result);
    } catch (error) {}
  }
  const totalExpense = totalExpenses.reduce((acc, expenses) => {
    return acc + expenses.valor;
  }, 0);

  useEffect(() => {
    getTotalExpense();
  }, []);

  // Calculo saldo liquido

  const saldoLiquido = totalSale - totalExpense;

  return (
    <div className="flex h-screen bg-gray-100">
      <Aside />
      <main className="w-full flex-1 overflow-x-hidden px-4 py-6 lg:px-8">
        <div className="m-8 flex items-center justify-between p-4">
          <div>
            <h1 className="text-4xl font-bold">Dashboard Financeiro</h1>
            <p className="text-[18px] text-gray-500">
              Visão geral das finanças da Codi Academy
            </p>
          </div>
          {/* Filter por periodo e por data selecionada */}
          <div className="mr-8 flex flex-row gap-2 sm:flex">
            <FiltroPorPeriodo
              value={selectedFilter}
              onChange={setselectedFilter}
            />
            <RangeCalendar />
          </div>
        </div>
        {/* Cards de resumos */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard
            iconMain={TrendingUp}
            iconSecundary={ChartNoAxesCombined}
            name="  Receitas Consolidadas"
            value={totalSale}
            color="green"
          />
          <InfoCard
            iconMain={TrendingDown}
            iconSecundary={BanknoteArrowDown}
            name="  Despesas Consolidads"
            value={totalExpense}
            color="red"
          />
          <InfoCard
            iconMain={TrendingUpDown}
            iconSecundary={BanknoteArrowDown}
            name="Resultado Consolidado"
            value={saldoLiquido}
            color="blue"
          />
        </section>
        {/* Gráfico */}

        <section className="rounded-lg border-2 border-purple-200 bg-purple-300 sm:p-6">
          <div className="mb-4 justify-end">
            <ToggleButton
              filter={selectedFilter}
              setFilter={setselectedFilter}
            />
          </div>
        </section>
        {/* Ações Rápidas */}
        <section className="m-8 flex flex-col rounded-lg border-2 border-purple-200 bg-purple-100 p-4 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <h3 className="text-xl font-semibold text-[#A243D2]">
              Ações Rápidas
            </h3>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <Button to="/vendas"> Gerenciar Vendas</Button>
            <Button to="/gastos">Gerenciar Despesas</Button>
            <Button to="/relatorios"> Vizualizar Relatórios</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
