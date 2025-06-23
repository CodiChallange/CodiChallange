import { Aside } from "@/Components/Aside";
import { CardsReports } from "@/Components/CardsReports";
import { TrendingDown, TrendingUp, TrendingUpDown } from "lucide-react";

export function Relatorios() {
  return (
    <div className="flex h-screen">
      <Aside />
      <div className="overflow-auto">
        <div>Header- Eduardo</div>
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
        <div>Toggle -Eduardo</div>
        <div>Grasficos -Jander</div>
        <div>Detalhamento -Eduardo</div>
      </div>
    </div>
  );
}
