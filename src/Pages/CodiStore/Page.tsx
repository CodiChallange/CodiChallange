import { Aside } from "@/Components/Aside";
import { Search } from "lucide-react";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/Components/ui/select";
import { CardStore } from "@/Components/CodiStore/CardStore";
import { CreateProduct } from "@/Components/CodiStore/CreateProductModal";
import { useState } from "react";
import { CardDetails } from "@/Components/CodiStore/CodiStoreDetailsModal";
import { Cart } from "@/Components/CodiStore/CartModal";
import { FiltroPorPeriodo } from "@/Components/Dashboard/FiltroPorPeriodo";
type Filter = "semana" | "mes" | "ano";
export function CodiStore() {
  const [selectedFilter, setselectedFilter] = useState<Filter>("mes");
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  function handleOpenModal() {
    setIsOpenEdit(!isOpenEdit);
  }
  return (
    <div className="flex h-screen">
      <Aside />
      <div className="flex w-full flex-col gap-8 overflow-auto bg-gray-100 p-5">
        <header className="flex w-full flex-col items-center justify-between gap-4 lg:flex-row">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-bold">Codi Store</h1>
            <p className="text-[18px] text-gray-500">
              Gerencie as vendas da lojinha de comidas
            </p>
          </div>
          <div className="flex w-full flex-col justify-end gap-2 lg:flex-row">
            <CreateProduct />
            <Cart />
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
          <FiltroPorPeriodo
            value={selectedFilter}
            onChange={setselectedFilter}
          />
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
        {/* Cards Area */}
        <main>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {[...Array(10)].map(() => (
              <CardStore open={handleOpenModal} />
            ))}
          </div>
        </main>
      </div>
      <div>{isOpenEdit && <CardDetails open={handleOpenModal} />}</div>
    </div>
  );
}
