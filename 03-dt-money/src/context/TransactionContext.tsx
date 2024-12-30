import {ReactNode, useCallback, useEffect, useState} from "react";
import {api} from "../lib/axios.ts";
import {createContext} from "use-context-selector";

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
    createTransactions: (data: CreatedTransactionInputs) => Promise<void>;
}

interface TransactionProviderProps{
    children: ReactNode;
}

interface CreatedTransactionInputs{
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome';
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({children}: TransactionProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])

    const fetchTransactions = useCallback(
        async (query?: string)=> {

            const response = await api.get('/transactions', { // Pegando dados do endPoint /transactions que esta salvo no nosso server.json...
                params:{
                    _sort: 'createdAt',
                    _order: 'desc',
                    q: query,
                }
            })

            setTransactions(response.data); // Passando dados do server.json para o transaction
        },
        [],
    )

    useEffect(() => {
        fetchTransactions();
    }, [fetchTransactions]);


    const createTransactions = useCallback(
        async (data: CreatedTransactionInputs)=> {
            const { description, type, price, category } = data;

            const response = await api.post('/transactions',{ // Registrando nova transação para o endPoint /transactions enviando la no nosso server.json...
                description,
                type,
                price,
                category,
                createdAt: new Date(),
            })

            setTransactions(state => [response.data, ...state]);
        },
        [],
    )

    return(
        <div>
            <TransactionsContext.Provider
                value={
                {
                    transactions,
                    fetchTransactions,
                    createTransactions
                }}
            >
                {children}
            </TransactionsContext.Provider>
        </div>
    )
}