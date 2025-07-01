import { Aside } from "@/Components/Aside";
import { Plus } from "lucide-react";

export function CodiStore() {
  return (
    <div className="flex h-screen">
      <Aside />
      <div className="flex w-full flex-col gap-8 overflow-auto bg-gray-100 p-5">
        <header className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-bold">Codi Store</h1>
            <p className="text-[18px] text-gray-500">
              Gerencie as vendas da lojinha de comidas
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex cursor-pointer gap-2 rounded-lg bg-[#A243D2] px-5 py-3 text-white">
              <Plus />
              Novo Item
            </button>
            <button className="flex cursor-pointer gap-2 rounded-lg bg-[#A243D2] px-5 py-3 text-white">
              <Plus />
              <span>Nova Venda</span>
            </button>
          </div>
        </header>
        <div>
          <h1>Input</h1>
          <h1>Filtros</h1>
        </div>
        <main>
          <div>
            <h1>Cards Area</h1>
          </div>
        </main>
      </div>
    </div>
  );
}
