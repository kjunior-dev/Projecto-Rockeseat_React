import {SummaryContainer} from "./styles.ts";
import {ArrowCircleDown, ArrowCircleUp, CurrencyDollar} from "phosphor-react";
import {SummaryCard} from "../Header/styles.ts";
import {priceFormatter} from "../../utils/formatter.ts";
import {useSummary} from "../../hooks/useSummary.ts";

export function Summary() {

    /*const {transactions} = useContext(TransactionsContext)

    const summary = transactions.reduce(
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
    )*/// Codigo subistituido por code abaixo

    const summary = useSummary(); // Retorna mesmo dados { income: 1400, outcome: 2300, total: 3700 }

    return(
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color='#00b37e'/>
                </header>

                <strong>{priceFormatter.format(summary.income)}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown size={32} color='#f75a68'/>
                </header>
                <strong>{priceFormatter.format(summary.outcome)}</strong>
            </SummaryCard>

            <SummaryCard variant={'green'}>
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color='#FFF'/>
                </header>

                <strong>{priceFormatter.format(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}