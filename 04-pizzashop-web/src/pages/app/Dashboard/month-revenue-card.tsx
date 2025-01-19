import {Card, CardContent, CardHeader, CardTitle} from "../../../components/ui/card.tsx";
import {DollarSign} from "lucide-react";
import {useQuery} from "@tanstack/react-query";
import {getMonthRevenue} from "../../../api/get-month-revenue.ts";
import {MetricCardSkeleton} from "./metric-card-skeleton.tsx";

export function MonthRevenueCard(){

    const { data: monthRevenue /*, isPending: monthRevenueIsPending*/  } = useQuery({
        queryFn: getMonthRevenue,
        queryKey: ['metrics', 'month-revenue'],
    })

    console.log("monthRevenue => ", monthRevenue);
    return(
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle> Receita total (mes) </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground"/>
            </CardHeader>

            <CardContent className="space-y-1">
                {monthRevenue ? (
                    <>
                        <span className="text-2xl font-bold tracking-tight">
                             {monthRevenue.receipt.toLocaleString('pt-CV', {
                                 style: 'currency',
                                 currency: 'CVE'
                             })}
                        </span>
                        <p className="text-xs text-muted-foreground">
                            {monthRevenue.diffFromLastMonth >= 0 ? (
                                <>
                                    <span
                                        className="text-emerald-500 dark:text-emerald-400"> + {monthRevenue.diffFromLastMonth}%
                                    </span> em relacao ao mes passado
                                </>
                            ) : (
                                <>
                                    <span
                                        className="text-rose-500 dark:text-rose-400"> {monthRevenue.diffFromLastMonth}%
                                    </span> em relacao ao mes passado
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