import {Helmet} from "react-helmet-async";
import {MonthRevenueCard} from "./month-revenue-card.tsx";
import {MonthOrdersAmountCard} from "./month-orders-amount-card.tsx";
import {DayOrdersAmountCard} from "./day-orders-amount-card.tsx";
import {MonthCanceledOrdersCard} from "./month-canceled-orders-card.tsx";
import {RevenueChart} from "./revenue-chart.tsx";
import {PopularProdutChart} from "./popular-produt-chart.tsx";

export function Dashboard(){

    return(
        <>
            <Helmet title="Dashboard"/>
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

                <div className="grid grid-cols-4 gap-4">
                    <MonthRevenueCard/>
                    <MonthOrdersAmountCard/>
                    <DayOrdersAmountCard/>
                    <MonthCanceledOrdersCard/>
                </div>

                <div className="grid grid-cols-9 gap-4">
                    <RevenueChart/>
                    <PopularProdutChart/>
                </div>
            </div>
        </>
    )
}