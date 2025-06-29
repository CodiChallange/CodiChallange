import { SquarePen, Trash2 } from "lucide-react";
import { Card } from "./ui/card";
import {
  Dialog,
  DialogClose,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface ExpensesCardProps {
  title: string;
  description: string;
  data: string;
  fixed?: string;

  value: string;
}

export function Cardexpenses({
  title,
  description,
  data,
  fixed,

  value,
}: ExpensesCardProps) {
  return (
    <div>
      {/*Card de edição do gasto*/}
      <Card className="bg-white p-2 transition duration-[0.5s] hover:bg-gray-100">
        {/*Header*/}
        <div className="grid justify-between sm:grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-start gap-5 md:flex-row md:items-center">
            <h1 className="w-fit text-[18px] font-medium">{title}</h1>
            {/*Content*/}
            <div
              className={`m-3 flex w-fit items-center rounded-2xl px-2 ${fixed === "Fixa" ? "w-11 bg-red-500" : "w-[70px] bg-gray-200"}`}
            >
              <span
                className={`${fixed === "Fixa" ? "text-white" : "text-black"}`}
              >
                {fixed}
              </span>
            </div>
            {/*<div
              className={`w-fit ${
                Appellant === "Recorrente"
                  ? "m-3 flex w-24 items-center rounded-2xl border px-2"
                  : ""
              }`}
            >
              <span className={`${Appellant === "Recorrente" ? "" : ""}`}>
                {Appellant}
              </span>
            </div>*/}
          </div>
          <div className="flex justify-end">
            <h1 className="text-2xl font-bold text-red-600">R$ {value}</h1>
          </div>
        </div>
        <div className="mr-4 flex justify-between">
          <div className="text-gray-500">
            <p>{description}</p>
            <p>{data}</p>
          </div>
          {/*Modal de edição de gasto*/}
          <div className="flex gap-1">
            <button className="flex h-9 w-9 items-center justify-center rounded-sm border bg-white transition duration-[0.5s] hover:bg-gray-300">
              <Dialog>
                {/*Botão de edição do card*/}
                <form>
                  <DialogTrigger asChild>
                    <SquarePen />
                  </DialogTrigger>
                  {/*Conteúdo do modal de edição*/}
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
                            id="description"
                            type="text"
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm"
                          />
                        </div>
                        {/*Select do tipo de despesa*/}
                        <div>
                          <label>Categoria</label>
                          <Select>
                            <SelectTrigger className="flex w-full p-5">
                              <SelectValue placeholder="Selecione o tipo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Fixa">Despesa Fixa</SelectItem>
                              <SelectItem value="Variavel">
                                Despesa Variavel
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        {/*Select do tipo de gasto*/}
                        <div>
                          <label>Tipo</label>
                          <input
                            type="text"
                            id="description"
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm"
                          ></input>
                        </div>
                        {/*Input de valores*/}
                        <div>
                          <label>Valor(R$)</label>
                          <input
                            id="value"
                            type="number"
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm"
                          />
                        </div>
                      </div>
                    </form>
                    {/*Botões de cancelar e salvar a edição*/}
                    <DialogFooter>
                      <DialogClose asChild>
                        <button className="rounded-2xl border px-4 py-2 transition duration-[1s] hover:bg-gray-200">
                          Cancelar
                        </button>
                      </DialogClose>
                      <DialogClose asChild>
                        <button className="rounded-2xl bg-purple-500 px-4 text-white transition duration-[1s] hover:bg-purple-700">
                          Salvar alterações
                        </button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </form>
              </Dialog>
            </button>
            {/*Botão de excluir o card*/}
            <button className="flex h-9 w-9 items-center justify-center rounded-sm border bg-white transition duration-[0.5s] hover:bg-gray-300">
              <Trash2 />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
