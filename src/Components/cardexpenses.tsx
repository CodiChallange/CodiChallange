import { SquarePen, Trash2 } from "lucide-react";
import { Card } from "./ui/card";
import { ExpensesForm } from "@/Forms/ExpensesForm";

interface CardExpensesProps {
  title: string;
  description: string;
  data: string;
  fixed?: string;

  value: string;
}

export function CardExpenses({
  title,
  description,
  data,
  fixed,

  value,
}: CardExpensesProps) {
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
              <button className="flex h-9 w-9 items-center justify-center rounded-sm border bg-white transition duration-[0.5s] hover:bg-gray-300">
                <ExpensesForm
                  title="Edite sua despesa"
                  description="Insira os dados novos"
                  icon={SquarePen}
                />
              </button>
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
