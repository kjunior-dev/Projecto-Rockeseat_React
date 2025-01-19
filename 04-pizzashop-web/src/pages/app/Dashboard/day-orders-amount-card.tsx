import {Card, CardContent, CardHeader, CardTitle} from "../../../components/ui/card.tsx";
import {Utensils} from "lucide-react";
import {useQuery} from "@tanstack/react-query";
import {getDayOrdersAmount} from "../../../api/get-day-orders-amount.ts";
import {MetricCardSkeleton} from "./metric-card-skeleton.tsx";

export function DayOrdersAmountCard(){

    const { data: dayOrdersAmount } = useQuery({
        queryFn: getDayOrdersAmount,
        queryKey: ['metrics', 'day-orders-amount'],
    })

    console.log("dayOrdersAmountFn => ", dayOrdersAmount);

    return(
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle> Pedidos (dia) </CardTitle>
                <Utensils className="h-4 w-4 text-muted-foreground"/>
            </CardHeader>

            <CardContent className="space-y-1">
                {dayOrdersAmount ? (
                    <>
                        <span className="text-2xl font-bold tracking-tight">
                            {dayOrdersAmount.amount}$00
                        </span>
                        <p className="text-xs text-muted-foreground">
                            {dayOrdersAmount.diffFromYesterday >= 0 ? (
                                <>
                                    <span
                                        className="text-emerald-500 dark:text-emerald-400"> + {dayOrdersAmount.diffFromYesterday}%
                                    </span> em relacao a ontem
                                </>
                            ) : (
                                <>
                                    <span
                                        className="text-rose-500 dark:text-rose-400"> {dayOrdersAmount.diffFromYesterday}%
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