import { Aside } from "@/Components/Aside";
import { Plus, Search } from "lucide-react";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/Components/ui/select";

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
        {/* Inputs */}
        <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-5 shadow lg:flex-row">
          <div className="flex items-center gap-3 rounded-lg border px-3 py-2 md:w-full lg:w-5/6">
            <Search />
            <input
              type="text"
              placeholder="Buscar por nome do professor "
              className="w-full outline-none"
            />
          </div>
          <div className="h-full md:w-full lg:w-1/6">
            <Select>
              <SelectTrigger className="flex w-full p-5">
                <SelectValue placeholder="Turnos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Turnos</SelectItem>
                <SelectItem value="Instrutor">Manhã</SelectItem>
                <SelectItem value="Coordenador">Tarde</SelectItem>
                <SelectItem value="Assistente">Noite</SelectItem>
              </SelectContent>
            </Select>
          </div>
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
