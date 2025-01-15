import {TableCell, TableRow} from "../../../components/ui/table.tsx";
import {Button} from "../../../components/ui/button.tsx";
import {ArrowRight, Search, X} from "lucide-react";
import {Dialog, DialogTrigger} from "../../../components/ui/dialog.tsx";
import {OrderDetails} from "./order-details.tsx";
import {OrderStatus} from "../../../components/ui/order-status.tsx";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale'
import {useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {cancelOrder} from "../../../api/cancel-order.ts";
import {GetOrdersResponse} from "../../../api/getOrders.ts";
export interface OrderTableRowProps{
    orders: {
        orderId: string
        createdAt: string
        status: "pending" | "canceled" | "processing" | "delivering" | "delivered"
        customerName: string
        total: number
    }
}
export function OrderTableRow({orders}: OrderTableRowProps) {

    const [isDetailsOpen, setIsDetailsOpen] = useState(false)

    const queryClient = useQueryClient();

    const { mutateAsync: cancelOrderFn} = useMutation({
        mutationFn: cancelOrder,
        onSuccess: (_, {orderId}) => {
            const orderListCache = queryClient.getQueriesData<GetOrdersResponse>({
                queryKey: ['orders'],
            })

            orderListCache.forEach(([cacheKey, cacheData]) => {
                if (!cacheData){
                    return
                }

                queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
                    ...cacheData,
                    orders: cacheData.orders.map(order => {
                        if (order.orderId === orderId){
                            return { ...order, status: 'canceled' }
                        }else {
                            return order
                        }
                    })
                })
            })
        }
    })

    return (
        <TableRow> {/* Isso é o Nosso tr => representa uam linha na tabela */}
            <TableCell> {/* Isso é o Nosso td => Representa uma célula de dados dentro de uma linha da tabela */}
                <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
                    {/* O DialogTrigger ja é um botao, se queremos que o nosso button comporte como um trigger so colocar asChild no Trigger*/}
                    <DialogTrigger asChild>
                        <Button variant="outline" size="xs">
                            <Search className="h-3 w-3"/>
                            <span className="sr-only">Detalhes do pedido</span>
                        </Button>
                    </DialogTrigger>

                    <OrderDetails
                        orderId={orders.orderId}
                        open={isDetailsOpen}
                    /> {/* Componente do modal com detalhes do pedido usando DialogContent de DialogTitl e Description */}
                </Dialog>
            </TableCell>

            <TableCell className="font-mono text-xs font-medium">{orders.orderId}</TableCell>

            <TableCell className="text-muted-foreground">
                { formatDistanceToNow(orders.createdAt, {
                    locale: ptBR,
                    addSuffix: true
                })}
            </TableCell>

            <TableCell>
                <OrderStatus status={orders.status}/>
            </TableCell>

            <TableCell className="font-medium">{orders.customerName}</TableCell>

            <TableCell className="font-medium">{orders.total.toLocaleString('pt-CV', {
                    style: 'currency',
                    currency: 'CVE'
                })}
            </TableCell>

            <TableCell>
                <Button className="text-green-500 bg-transparent" variant="default" size="xs">
                    <ArrowRight className="mr-2 h-3 w-3 text-green-500"/>
                    Aprovar
                </Button>
            </TableCell>

            <TableCell>
                <Button
                    disabled={!['pending', 'processing'].includes(orders.status)}
                    onClick={() => cancelOrderFn({ orderId: orders.orderId })}
                    className="text-rose-700 bg-transparent" variant="default" size="xs">
                    <X className="mr-2 h-3 w-3 text-rose-700"/>
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
    )
}