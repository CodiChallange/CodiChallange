"use client";
import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/Components/ui/chart";
export const description = "A pie chart with a custom label";
const chartData = [
  { gastos: "aluguel", valor: 275, fill: "var(--color-aluguel)" },
  { gastos: "luz", valor: 200, fill: "var(--color-luz)" },
  { gastos: "agua", valor: 187, fill: "var(--color-agua)" },
  { gastos: "internet", valor: 173, fill: "var(--color-internet)" },
  { gastos: "outros", valor: 90, fill: "var(--color-outros)" },
];
const chartConfig = {
  valor: {
    label: "Valor",
  },
  aluguel: {
    label: "Aluguel",
    color: "var(--chart-1)",
  },
  luz: {
    label: "Luz",
    color: "var(--chart-2)",
  },
  agua: {
    label: "Agua",
    color: "var(--chart-3)",
  },
  internet: {
    label: "Internet",
    color: "var(--chart-4)",
  },
  outros: {
    label: "Outros",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;
export function ChartExpenseDistribution() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Distribuição de Gastos</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] px-0"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="valor" hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="valor"
              labelLine={false}
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="hsla(var(--foreground))"
                  >
                    {payload.gastos}
                  </text>
                );
              }}
              nameKey="gastos"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
