import { Card, CardContent, CardTitle } from "./ui/card";
import type { IconBaseProps } from "react-icons";

import type { colorTypes } from "./InfoCard";
export type bgColorTypes = "green" | "red" | "blue";
interface ReportsCardProps {
  title: string;
  icon?: React.ComponentType<IconBaseProps>;
  value: number;
  color?: colorTypes;
  bgColor?: bgColorTypes;
}
export function CardsReports({
  title,
  icon: Icon,
  value,
  color,
  bgColor,
}: ReportsCardProps) {
  return (
    <div>
      {color === "green" && bgColor === "green" && (
        <Card className="m-8 flex h-35 w-65 flex-row justify-between border-2 border-emerald-500 bg-green-100 text-emerald-500">
          <div>
            <CardTitle className="ml-8 text-xl font-bold">{title}</CardTitle>
            <div className="mt-5 ml-8 grid grid-cols-2">
              <CardContent className="p-0 text-2xl font-bold">
                {value}
              </CardContent>
            </div>
          </div>
          <div className="flex items-center">
            <CardContent>
              {Icon && <Icon size={50} className="text-emerald-500" />}{" "}
            </CardContent>
          </div>
        </Card>
      )}
      {color === "red" && bgColor === "red" && (
        <Card className="m-8 flex h-35 w-65 flex-row justify-between border-2 border-red-500 bg-red-100 text-red-500">
          <div>
            <CardTitle className="ml-8 text-xl font-bold">{title}</CardTitle>
            <div className="mt-5 ml-8 grid grid-cols-2">
              <CardContent className="p-0 text-2xl font-bold">
                {value}
              </CardContent>
            </div>
          </div>
          <div className="flex items-center">
            <CardContent>
              {Icon && <Icon size={50} className="text-red-500" />}{" "}
            </CardContent>
          </div>
        </Card>
      )}

      {color === "blue" && bgColor === "blue" && (
        <Card className="m-8 flex h-35 w-65 flex-row justify-between border-2 border-sky-500 bg-cyan-100 text-sky-500">
          <div>
            <CardTitle className="ml-8 text-xl font-bold">{title}</CardTitle>
            <div className="mt-5 ml-8 grid grid-cols-2">
              <CardContent className="p-0 text-2xl font-bold">
                {value}
              </CardContent>
            </div>
          </div>
          <div className="flex items-center">
            <CardContent>
              {Icon && <Icon size={50} className="text-sky-500" />}{" "}
            </CardContent>
          </div>
        </Card>
      )}
    </div>
  );
}
