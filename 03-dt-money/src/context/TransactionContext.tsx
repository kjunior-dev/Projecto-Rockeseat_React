import {createContext, ReactNode, useEffect, useState} from "react";
import {api} from "../lib/axios.ts";

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';  // Pode ser 'income' ou 'expense'
    category: string;
    price: number;
    createdAt: string;  // Data em formato ISO 8601
}
interface TransactionContextType{
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionProviderProps{
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({children}: TransactionProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function fetchTransactions(query?: string){

        const response = await api.get('/transactions', { // Pegando dados do endPoint /transactions...
            params:{
                q: query,
            }
        })

        setTransactions(response.data); // Passando dados do server.json para o transaction
    }

    useEffect(() => {
        fetchTransactions();
    }, []);

    return(
        <div>
            <TransactionsContext.Provider
                value={
                {
                    transactions,
                    fetchTransactions
                }}
            >
                {children}
            </TransactionsContext.Provider>
        </div>
    )
}