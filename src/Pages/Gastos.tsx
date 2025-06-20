import { Aside } from "@/Components/Aside";
import { CardsReports } from "@/Components/CardsReports";
import { Card } from "@/Components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import {
  Calendar,
  FilterIcon,
  Search,
  SquarePen,
  Trash2,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export function Gastos() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Aside />
      <div className="flex w-full flex-col gap-2 overflow-auto p-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-bold">Módulo de Gastos</h1>
            <p className="text-[18px] text-gray-500">
              Gerencie despesas fixas e variáveis
            </p>
          </div>
          <div>
            <button className="flex gap-2 rounded-lg bg-[#A243D2] px-5 py-3 text-white">
              <span>+ Nova despesa</span>
            </button>
          </div>
        </div>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CardsReports
            title={"Despesas fixas"}
            value={654}
            color={"red"}
            icon={TrendingUp}
            bgColor={"red"}
          />
          <CardsReports
            title={"Despesas variáveis"}
            value={654}
            color={"orange"}
            icon={TrendingUp}
            bgColor={"orange"}
          />
          <CardsReports
            title={"Total de gastos"}
            value={654}
            color={"purple"}
            icon={TrendingUp}
            bgColor={"purple"}
          />
        </section>

        <div className="flex w-full gap-4 rounded-lg bg-white p-5 shadow">
          <div className="flex w-5/6 items-center gap-3 rounded-lg border px-3 py-2">
            <Search />
            <input
              type="text"
              placeholder="Buscar por nome ou e-mail..."
              className="w-full outline-none"
            />
          </div>

          <div className="h-full w-1/6">
            <Select>
              <SelectTrigger className="flex w-full p-5">
                <FilterIcon />
                <SelectValue placeholder="Todas as categorias" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as categrias</SelectItem>
                <SelectItem value="Desepesas fixas">Despesas fixas</SelectItem>
                <SelectItem value="Despesas variaveis">
                  Despesas Variaveis
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="py-4 text-2xl">
                  Todas as despesas
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {Array.from({ length: 8 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex justify-between">
                      <div className="flex gap-4">
                        <h1 className="text-[18px] font-medium">
                          Aluguel do Espaço
                        </h1>
                        <p className="flex items-center rounded-2xl bg-red-500 px-2 text-white">
                          Fixa
                        </p>
                        <p className="flex items-center rounded-2xl border px-2">
                          Recorrente
                        </p>
                      </div>
                      <h1 className="text-2xl font-bold text-red-600">
                        R$ 3.000,00
                      </h1>
                    </div>
                    <div className="mr-4 flex justify-between">
                      <div className="text-gray-500">
                        <p>Aluguel</p>
                        <p>01-01-2025</p>
                      </div>
                      <div className="flex gap-1">
                        <button className="rounded-sm border p-1">
                          <Dialog>
                            <form>
                              <DialogTrigger asChild>
                                <button className="flex items-center bg-white">
                                  <SquarePen />
                                </button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                  <DialogTitle className="flex flex-col space-y-1.5 text-center sm:text-left">
                                    Editar gasto
                                  </DialogTitle>
                                </DialogHeader>
                                <form className="space-y-4">
                                  <div className="grid grid-cols-1 gap-4">
                                    <div>
                                      <label>Descrição</label>
                                      <input
                                        type="text"
                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm"
                                      />
                                    </div>
                                    <div>
                                      <label>Categoria</label>
                                      <Select>
                                        <SelectTrigger className="flex w-full p-5">
                                          <SelectValue placeholder="Selecione o tipo" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="Online">
                                            Online
                                          </SelectItem>
                                          <SelectItem value="Presencial">
                                            Presencial
                                          </SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                    <div>
                                      <label>Tipo</label>
                                      <Select>
                                        <SelectTrigger className="flex w-full p-5">
                                          <SelectValue placeholder="Selecione o tipo" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="Online">
                                            Online
                                          </SelectItem>
                                          <SelectItem value="Presencial">
                                            Presencial
                                          </SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                    <div>
                                      <label>Valor(R$)</label>
                                      <input
                                        type="number"
                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm"
                                      />
                                    </div>
                                  </div>
                                </form>
                                <DialogFooter>
                                  <DialogClose asChild>
                                    <button className="rounded-2xl border px-4 py-2">
                                      Cancel
                                    </button>
                                  </DialogClose>
                                  <DialogClose asChild>
                                    <button className="duration-(2s) rounded-2xl bg-purple-500 px-4 text-white transition hover:bg-purple-700">
                                      Salvar alterações
                                    </button>
                                  </DialogClose>
                                </DialogFooter>
                              </DialogContent>
                            </form>
                          </Dialog>
                        </button>
                        <button className="rounded-sm border p-1">
                          <Trash2 />
                        </button>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
