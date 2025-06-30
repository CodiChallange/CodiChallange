import { SquarePen, Trash2 } from "lucide-react";
import { Card } from "./ui/card";

import { SalesForm } from "@/Forms/SalesForm";

interface CardSalesProps {
  name: string;
  email: string;
  phone: string;
  type: string;
  data: string;
  grossvalue: string;
  discount: string;
  deduction: string;
  finalvalue: string;
}

export function CardSales({
  name,
  email,
  phone,
  type,
  data,
  grossvalue,
  discount,
  deduction,
  finalvalue,
}: CardSalesProps) {
  return (
    <div>
      {/*card de edição da venda*/}
      <Card className="bg-white p-2 transition duration-[0.5s] hover:bg-gray-100">
        {/*Header*/}
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <div className="grid">
            <h1 className="text-[18px] font-medium">{name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
          </div>
          {/*content*/}
          <div className="grid justify-end">
            <div
              className={`flex items-center justify-center rounded-2xl ${type === "Online" ? "h-7 w-14 bg-black" : "h-7 w-20 bg-gray-200 px-2"}`}
            >
              <span
                className={` ${type === "Online" ? "text-white" : "text-black"}`}
              >
                {type}
              </span>
            </div>
            <p className="flex items-start justify-center text-gray-500">
              {data}
            </p>
          </div>
        </div>
        <div className="grid gap-4 text-sm sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          <div>
            <p>Valor bruto</p>
            <p className="text-[16px] font-bold text-green-600">
              R$ {grossvalue}
            </p>
          </div>
          <div>
            <p> Desconto</p>
            <p className="text-[16px] font-bold text-red-600">-R$ {discount}</p>
          </div>
          <div>
            <p>Deduçoes</p>
            <p className="text-[16px] font-bold text-red-600">
              -R$ {deduction}
            </p>
          </div>
          <div>
            <p>Valor final</p>
            <p className="text-[18px] font-bold text-purple-800">
              R$ {finalvalue}
            </p>
          </div>
          {/*Modal de edição do card*/}
          <div className="flex gap-1">
            <button className="flex h-9 w-9 items-center justify-center rounded-sm border bg-white transition duration-[0.5s] hover:bg-gray-300">
              <SalesForm
                title="Edite sua venda"
                description="Insira os dados novos"
                icon={SquarePen}
                color="purple"
              />
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
