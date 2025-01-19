import {Card, CardContent, CardHeader, CardTitle} from "../../../components/ui/card.tsx";
import {Utensils} from "lucide-react";
import {useQuery} from "@tanstack/react-query";
import {getMonthOrdersAmount} from "../../../api/get-month-orders-amount.ts";
import {MetricCardSkeleton} from "./metric-card-skeleton.tsx";

export function MonthOrdersAmountCard(){

    const { data: monthOrdersAmount /*, isPending: monthOrdersAmountIsPending*/ } = useQuery({
        queryFn: getMonthOrdersAmount,
        queryKey: ['metrics', 'month-orders-amount'],
    })

    console.log("monthOrdersAmount => ", monthOrdersAmount);

    return(
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle> Pedido (mes) </CardTitle>
                <Utensils className="h-4 w-4 text-muted-foreground"/>
            </CardHeader>

            <CardContent className="space-y-1">
                { monthOrdersAmount ? (
                    <>
                        <span className="text-2xl font-bold tracking-tight">
                            {monthOrdersAmount.amount}$00
                        </span>
                        <p className="text-xs text-muted-foreground">
                            {monthOrdersAmount.diffFromLastMonth >= 0 ? (
                                <>
                                    <span
                                        className="text-emerald-500 dark:text-emerald-400"> {monthOrdersAmount.diffFromLastMonth}%
                                    </span> em relacao ao mes passada
                                </>
                            ) : (
                                <>
                                    <span
                                        className="text-rose-500 dark:text-rose-400"> {monthOrdersAmount.diffFromLastMonth}%
                                    </span> em relacao ao mes passada
                                </>
                            )}
                        </p>
                    </>
                ) : (
                    <MetricCardSkeleton/>
                    )
                }
            </CardContent>
        </Card>
    )
}