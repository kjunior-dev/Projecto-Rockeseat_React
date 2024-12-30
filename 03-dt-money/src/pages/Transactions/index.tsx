import {Header} from "../../components/Header";
import {Summary} from "../../components/Summary";
import {PriceHighlight, TransactionsContainer, TransactionsTable} from "./styles.ts";
import {SearchFrom} from "./components/SearchFrom";
import {TransactionsContext} from "../../context/TransactionContext.tsx";
import {dateFFormatter, priceFormatter} from "../../utils/formatter.ts";
import {useContextSelector} from "use-context-selector";


export function Transactions() {

    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions
    })

    console.log("Transactions => ", transactions)

   /* async function loadTransactions(){
        const response = await fetch("http://localhost:3000/transactions").then(response => response.json());
        const data = await response.json();

        setTransactions(data);
    }

    useEffect(() => {

        loadTransactions();
    }, []);

    console.log(transactions)*/

    return (
        <div>
            <Header/>
            <Summary/>

            <TransactionsContainer>
                <SearchFrom/>
                <TransactionsTable>
                    <tbody>
                    {transactions.map(transactions => {
                        return (
                            <tr key={transactions.id}>
                                <td width="50%">{transactions.description}</td>
                                <td>
                                    <PriceHighlight variant={transactions.type}>
                                        {
                                            transactions.type === 'outcome' && '-'
                                        }
                                        {priceFormatter.format(transactions.price)}
                                    </PriceHighlight>
                                </td>
                                <td>{transactions.category}</td>
                                <td>{dateFFormatter.format(new Date(transactions.createdAt))}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    );
}
