import api from './api';

interface Response {
  transactions: Transaction[];
  balance: Balance;
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
  created_at: Date;
}

export const getTransactions = async (): Promise<Response> => {
  const response = await api.get('transactions');

  return response.data;
};
