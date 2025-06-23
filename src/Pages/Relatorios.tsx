import { Aside } from "@/Components/Aside";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { Calendar, Download } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Percent, Plus } from "lucide-react";

import { CardsReports } from "@/Components/CardsReports";
import { TrendingDown, TrendingUp, TrendingUpDown } from "lucide-react";

export function Relatorios() {
  return (
    <div className="flex h-screen">
      <Aside />

      <div className="flex w-full flex-col gap-8 overflow-auto bg-gray-100 p-5">
        <div className="flex items-center justify-between">
          {/* Text Area */}
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-bold">Gestão de Equipe</h1>
            <p className="text-[18px] text-gray-500">
              Gerencie membros da equipe e suas informações
            </p>
          </div>
          {/* Filter Area */}
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="w-[200px] items-center border border-gray-300 shadow-lg">
                <SelectValue placeholder=" 6meses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6meses">
                  <Calendar color="black" /> Ultimos 6 meses
                </SelectItem>
                <SelectItem value="umAno">
                  <Calendar color="black" /> Um ano
                </SelectItem>
              </SelectContent>
            </Select>
            <button className="flex cursor-pointer items-center justify-center gap-3 rounded-lg border border-gray-300 px-2 py-1.5 text-[14px] shadow-lg">
              <Download size={16} />
              Exportar
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <CardsReports
            title={"Vendas"}
            value={10000}
            color={"green"}
            icon={TrendingUp}
            bgColor={"green"}
          />
          <CardsReports
            title={"Despesas"}
            value={10000}
            color={"red"}
            icon={TrendingDown}
            bgColor={"red"}
          />

          <CardsReports
            title={"Balanço"}
            value={10000}
            color={"blue"}
            icon={TrendingUpDown}
            bgColor={"blue"}
          />
        </div>
        <Tabs defaultValue="Vg" className="w-full text-black">
          <TabsList className="flex h-fit w-full bg-gray-200">
            <TabsTrigger value="Vg">Visão Geral</TabsTrigger>
            <TabsTrigger value="Cp">Comparativo</TabsTrigger>
            <TabsTrigger value="Ds">Distribuição</TabsTrigger>
            <TabsTrigger value="Td">Tendências</TabsTrigger>
          </TabsList>
          {/* Visao Geral */}
          <TabsContent value="Vg">
            <div className="flex">
              <div>Grafico 1 - Jander</div> <div>Grafico 2 - Jander</div>
            </div>
          </TabsContent>
          {/* Comparativo */}
          <TabsContent value="Cp">
            <div>Grafico 3 - Jander</div>
          </TabsContent>
          {/* Distribuição */}
          <TabsContent value="Ds">
            <div className="flex flex-col">
              <div className="flex">
                <div>Grafico 4 - Jander</div>
                <div>Grafico 5 - Jander</div>
              </div>
              {/* Detalhamento de gastos */}
              <div className="flex flex-col gap-4 rounded-lg bg-white p-3">
                <h1 className="text-2xl font-bold">Detalhamento de Gastos</h1>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center justify-between rounded-lg border border-gray-300 px-5 py-1.5">
                    <div className="flex items-center gap-3">
                      <div className="h-4 w-4 rounded-[100%] bg-purple-500"></div>
                      <span className="font-semibold">Aluguel</span>
                    </div>
                    <span className="font-bold text-red-500">R$ 15.000,00</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-gray-300 px-5 py-1.5">
                    <div className="flex items-center gap-3">
                      <div className="h-4 w-4 rounded-[100%] bg-red-500"></div>
                      <span className="font-semibold">Folha de Pagamento</span>
                    </div>
                    <span className="font-bold text-red-500">R$ 15.000,00</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-gray-300 px-5 py-1.5">
                    <div className="flex items-center gap-3">
                      <div className="h-4 w-4 rounded-[100%] bg-yellow-500"></div>
                      <span className="font-semibold">Energia</span>
                    </div>
                    <span className="font-bold text-red-500">R$ 15.000,00</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-gray-300 px-5 py-1.5">
                    <div className="flex items-center gap-3">
                      <div className="h-4 w-4 rounded-[100%] bg-green-500"></div>
                      <span className="font-semibold">Internet</span>
                    </div>
                    <span className="font-bold text-red-500">R$ 15.000,00</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-gray-300 px-5 py-1.5">
                    <div className="flex items-center gap-3">
                      <div className="h-4 w-4 rounded-[100%] bg-blue-500"></div>
                      <span className="font-semibold">Manutenção</span>
                    </div>
                    <span className="font-bold text-red-500">R$ 15.000,00</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-gray-300 px-5 py-1.5">
                    <div className="flex items-center gap-3">
                      <div className="h-4 w-4 rounded-[100%] bg-cyan-500"></div>
                      <span className="font-semibold">Suprimentos</span>
                    </div>
                    <span className="font-bold text-red-500">R$ 15.000,00</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-gray-300 px-5 py-1.5">
                    <div className="flex items-center gap-3">
                      <div className="h-4 w-4 rounded-[100%] bg-emerald-500"></div>
                      <span className="font-semibold">Marketing</span>
                    </div>
                    <span className="font-bold text-red-500">R$ 15.000,00</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-gray-300 px-5 py-1.5">
                    <div className="flex items-center gap-3">
                      <div className="h-4 w-4 rounded-[100%] bg-gray-500"></div>
                      <span className="font-semibold">Outros</span>
                    </div>
                    <span className="font-bold text-red-500">R$ 15.000,00</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          {/* Tendências */}
          <TabsContent value="Td">
            <div className="flex flex-col">
              <div>Grafico 6 - Jander </div>
              {/* Cards Area */}
              <div className="flex gap-3">
                <div className="flex w-full flex-col gap-2 rounded-lg border border-green-300 bg-green-100 p-4">
                  <h3 className="font-bold text-green-900">
                    Crescimento de Receitas
                  </h3>
                  <span className="flex items-center text-2xl font-bold text-green-900">
                    <Plus size={24} />
                    49
                    <Percent size={24} />
                  </span>
                  <p className="text-[14px] text-green-700">
                    Comparado ao período anterior
                  </p>
                </div>
                <div className="flex w-full flex-col gap-2 rounded-lg border border-yellow-300 bg-yellow-100 p-4">
                  <h3 className="font-bold text-yellow-900">
                    Controle de Gastos
                  </h3>
                  <span className="flex items-center text-2xl font-bold text-yellow-900">
                    <Plus size={24} />
                    49
                    <Percent size={24} />
                  </span>
                  <p className="text-[14px] text-yellow-700">
                    Aumento controlado dos gastos
                  </p>
                </div>
                <div className="flex w-full flex-col gap-2 rounded-lg border border-blue-300 bg-blue-100 p-4">
                  <h3 className="font-bold text-blue-900">
                    Melhoria da Margem
                  </h3>
                  <span className="flex items-center text-2xl font-bold text-blue-900">
                    <Plus size={24} />
                    49
                    <Percent size={24} />
                  </span>
                  <p className="text-[14px] text-blue-700">
                    Crescimento do lucro líquido
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
