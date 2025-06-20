import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

import type { IconBaseProps } from "react-icons";

export type colorTypes = "green" | "red" | "blue" | "orange" | "purple";
interface InfoCardProps {
  name: string;
  iconMain?: React.ComponentType<IconBaseProps>;
  iconSecundary?: React.ComponentType<IconBaseProps>;
  value: number;
  color?: colorTypes;
}

export function InfoCard({
  name,
  iconMain: IconMain,
  iconSecundary: IconSecondary,
  value,
  color,
}: InfoCardProps) {
  const valorFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
  return (
    <div>
      {color === "green" && (
        <Card className="m-8 h-40 w-74 gap-1 text-green-600">
          <CardHeader className="flex flex-row items-center justify-between gap-16">
            {IconMain && <IconMain size={24} className="text-green-600" />}
            <CardTitle className="flex flex-row gap-2">
              {IconSecondary && (
                <IconSecondary size={16} className="text-green-600" />
              )}{" "}
              {valorFormatado}
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4 flex flex-col justify-center">
            <p className="text-[0.625rem text-left"> {name} </p>
            <span className="mt-4 text-2xl font-bold">{valorFormatado}</span>
          </CardContent>
        </Card>
      )}

      {color === "red" && (
        <Card className="m-8 h-40 w-74 gap-1 text-red-600">
          <CardHeader className="flex flex-row items-center justify-between gap-16">
            {IconMain && <IconMain size={24} className="text-red-600" />}
            <CardTitle className="flex flex-row gap-2">
              {IconSecondary && (
                <IconSecondary size={16} className="text-red-600" />
              )}{" "}
              {valorFormatado}
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4 flex flex-col justify-center">
            <p className="text-[0.625rem text-left"> {name} </p>
            <span className="mt-4 text-2xl font-bold">{valorFormatado}</span>
          </CardContent>
        </Card>
      )}
      {color === "blue" && (
        <Card className="m-8 h-40 w-74 gap-1 text-blue-600">
          <CardHeader className="flex flex-row items-center justify-between gap-16">
            {IconMain && <IconMain size={24} className="text-blue-600" />}
            <CardTitle className="flex flex-row gap-2">
              {IconSecondary && (
                <IconSecondary size={16} className="text-blue-600" />
              )}{" "}
              {valorFormatado}
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4 flex flex-col justify-center">
            <p className="text-[0.625rem text-left"> {name} </p>
            <span className="mt-4 text-2xl font-bold">{valorFormatado}</span>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
