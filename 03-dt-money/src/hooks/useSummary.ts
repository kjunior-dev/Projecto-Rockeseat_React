import {useContext} from "react";
import {TransactionsContext} from "../context/TransactionContext.tsx";

export function useSummary(){
    const { transactions } = useContext(TransactionsContext)

    return transactions.reduce(
        (acc, transactions) => {

            if (transactions.type == 'income') {
                acc.income += transactions.price;
                acc.total += transactions.price;
            } else {
                acc.outcome += transactions.price;
                acc.total += transactions.price;
            }
            return acc;
        }, {
            income: 0,
            outcome: 0,
            total: 0,
        }
    );

}