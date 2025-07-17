import { api } from "@/Services/api/ApiConfig";

export interface totalExpensesResponse {
  id: string;
  descricao: string;
  valor: number;
  data: string;
  tipo: string;
  formaPagamento: string;
}

export async function getTotalExpenses() {
  const response = await api.get<totalExpensesResponse[]>("/despesas");
  return response.data;
}
