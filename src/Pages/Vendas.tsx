import { Aside } from "@/Components/Aside";
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
import { FilterIcon, Search, SquarePen, Trash2 } from "lucide-react";

export function Vendas() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Aside />
      <div className="flex w-full flex-col gap-2 overflow-auto p-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-bold">Módulo de Vendas</h1>
            <p className="text-[18px] text-gray-500">
              Gerencie vendas de cursos online e presenciais
            </p>
          </div>
          <div>
            <button className="flex gap-2 rounded-lg bg-[#A243D2] px-5 py-3 text-white">
              <span>+ Nova venda</span>
            </button>
          </div>
        </div>

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
                <SelectValue placeholder="Todos os tipos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os tipos</SelectItem>
                <SelectItem value="Online">Online</SelectItem>
                <SelectItem value="Presencial">Presencial</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="py-4 text-2xl">
                  Vendas cadastradas
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="space-y-2">
              {Array.from({ length: 8 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex justify-between">
                      <div>
                        <h1 className="text-[18px] font-medium">Bruno</h1>
                        <p>Bruno@gmail.com</p>
                        <p>(32)3957-2490</p>
                      </div>
                      <div>
                        <p className="flex justify-center rounded-2xl bg-black text-white">
                          online
                        </p>
                        <p className="text-gray-500">15-05-2025</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 text-sm">
                      <div>
                        <p>Valor bruto</p>
                        <p className="font-bold text-green-600">R$ 4.500,00</p>
                      </div>
                      <div>
                        <p>Desconto</p>
                        <p className="font-bold text-red-600">-R$ 100,00</p>
                      </div>
                      <div>
                        <p>Deduções</p>
                        <p className="font-bold text-red-600">-R$ 600,00</p>
                      </div>
                      <div>
                        <p>Valor final</p>
                        <p className="font-bold text-purple-800">R$ 3.800,00</p>
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
                                    Editar venda
                                  </DialogTitle>
                                </DialogHeader>
                                <form className="space-y-4">
                                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div>
                                      <label>Nome do cliente</label>
                                      <input
                                        id="name"
                                        type="text"
                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm"
                                      />
                                    </div>
                                    <div>
                                      <label>E-mail</label>
                                      <input
                                        id="email"
                                        type="text"
                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm"
                                      />
                                    </div>
                                    <div>
                                      <label>Telefone</label>
                                      <input
                                        id="phone"
                                        type="text"
                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm"
                                      />
                                    </div>
                                    <div>
                                      <label>Tipo de curso</label>
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
                                      <label>Valor bruto(R$)</label>
                                      <input
                                        type="number"
                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm"
                                      />
                                    </div>
                                    <div>
                                      <label>Desconto(R$)</label>
                                      <input
                                        type="number"
                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm"
                                      />
                                    </div>
                                    <div>
                                      <label>Imposto(R$)</label>
                                      <input
                                        type="number"
                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm"
                                      />
                                    </div>
                                    <div>
                                      <label>Comissões(R$)</label>
                                      <input
                                        type="number"
                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm"
                                      />
                                    </div>
                                    <div className="w-full">
                                      <label>Taxa do cartão(R$)</label>
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
                        <button className="rounded-sm border bg-white p-1">
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
