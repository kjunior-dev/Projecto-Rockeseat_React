import {Card, CardContent, CardHeader, CardTitle} from "../../../components/ui/card.tsx";
import {DollarSign} from "lucide-react";
import {useQuery} from "@tanstack/react-query";
import {getMonthCanceledOrdersAmount} from "../../../api/get-month-canceled-order-amounth.ts";
import {MetricCardSkeleton} from "./metric-card-skeleton.tsx";

export function MonthCanceledOrdersCard(){

    const { data: monthCanceledOrdersAmount /*, isPending: monthCanceledOrdersAmountIsPending*/ } = useQuery({
        queryFn: getMonthCanceledOrdersAmount,
        queryKey: ['metrics', 'month-canceled-orders-amount'],
    })

    console.log("monthCanceledOrdersAmount => ", monthCanceledOrdersAmount)

    return(
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle> Cancelamento (mes) </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground"/>
            </CardHeader>

            <CardContent className="space-y-1">
                {monthCanceledOrdersAmount ? (
                    <>
                        <span className="text-2xl font-bold tracking-tight">
                            {monthCanceledOrdersAmount.amount}$00
                        </span>
                        <p className="text-xs text-muted-foreground">
                            {monthCanceledOrdersAmount.diffFromLastMonth < 0 ? (
                                <>
                                    <span
                                        className="text-emerald-500 dark:text-emerald-400"> {monthCanceledOrdersAmount.diffFromLastMonth}%
                                    </span> em relacao a ontem
                                </>
                            ) : (
                                <>
                                    <span
                                        className="text-rose-500 dark:text-rose-400"> + {monthCanceledOrdersAmount.diffFromLastMonth}%
                                    </span> em relacao a ontem
                                </>
                            )}
                        </p>
                    </>
                ) : (
                    <MetricCardSkeleton/>
                )}
            </CardContent>
        </Card>
    )
}