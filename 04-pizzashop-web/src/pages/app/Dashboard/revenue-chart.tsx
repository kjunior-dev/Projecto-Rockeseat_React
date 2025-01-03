import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle} from "../../../components/ui/card.tsx";

import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    Line, CartesianGrid,
} from "recharts"

import colors from 'tailwindcss/colors'

const data = [
    { date: '10/12', revenue: 1200 },
    { date: '05/12', revenue: 300 },
    { date: '10/01', revenue: 230 },
    { date: '20/01', revenue: 129 },
    { date: '26/01', revenue: 456 },
    { date: '10/02', revenue: 500 },
    { date: '17/02', revenue: 250 },
]
export function RevenueChart(){
    return(
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">Receita no periodo</CardTitle>
                    <CardDescription> Receita diaria no periodo </CardDescription>
                </div>
            </CardHeader>

            <CardContent>
                <ResponsiveContainer width={"100%"} height={240}>
                    <LineChart data={data} style={{fontSize: 12}}>

                        <CartesianGrid vertical={false} strokeDasharray="3 3" className="text-black dark:stroke-muted"/>

                        <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />

                        <YAxis stroke="#888" axisLine={false} tickLine={false} width={60}
                            tickFormatter={(value: number) => value.toLocaleString('pt-CV', {
                                style: 'currency',
                                currency: 'CVE'
                            })}/>

                        <Line type="linear" strokeWidth={2} dataKey="revenue" stroke={colors.violet['500']}/>
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}