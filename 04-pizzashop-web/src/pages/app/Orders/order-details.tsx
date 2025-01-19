import {DialogContent, DialogDescription, DialogHeader, DialogTitle} from "../../../components/ui/dialog.tsx";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow
} from "../../../components/ui/table.tsx";
import {getOrderDetails} from "../../../api/get-order-details.ts";
import {useQuery} from "@tanstack/react-query";
import {formatDistanceToNow} from "date-fns";
import {ptBR} from "date-fns/locale";
import {OrderStatus} from "../../../components/order-status.tsx";
import {OrderDetailSkeleton} from "./order-detail-skeleton.tsx";

interface OrderDetailsProps {
    orderId: string;
    open: boolean
}

export function OrderDetails({
    orderId,
    open
}: OrderDetailsProps){

    const { data: order} = useQuery({
        queryKey: ['order', orderId],
        queryFn: () => getOrderDetails({orderId}),
        enabled: open,
    })


    return(
        <div>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Pedido: {orderId}</DialogTitle>
                    <DialogDescription>Detalhes do Pedido</DialogDescription>
                </DialogHeader>

                {order ? (
                    <div className="space-y-6">
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="text-muted-foreground"> Status </TableCell>
                                    <TableCell className="flex justify-end">
                                        <OrderStatus status={order.status}/>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className="text-muted-foreground"> Cliente </TableCell>
                                    <TableCell className="flex justify-end">
                                        {order?.customer.name}
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className="text-muted-foreground"> Telefone </TableCell>
                                    <TableCell className="flex justify-end">
                                        {order?.customer.phone ?? 'Não informado'}
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className="text-muted-foreground"> Email </TableCell>
                                    <TableCell className="flex justify-end">
                                        {order?.customer.email}
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className="text-muted-foreground"> Realizado há </TableCell>
                                    <TableCell className="flex justify-end">
                                        { formatDistanceToNow(order?.createdAt, {
                                            locale: ptBR,
                                            addSuffix: true
                                        })}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Produto</TableHead>
                                    <TableHead className="text-right">Quantidade</TableHead>
                                    <TableHead className="text-right">Preço</TableHead>
                                    <TableHead className="text-right">SubTotal</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {order.orderItems.map(item => (
                                        <TableRow key={item.id}>
                                            <TableCell>{item?.product.name}</TableCell>
                                            <TableCell className="text-right">{item?.quantity}</TableCell>
                                            <TableCell className="text-right">
                                                {(item?.priceInCents).toLocaleString('pt-CV', {
                                                    style: 'currency',
                                                    currency: 'CVE'
                                                })}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                {(item?.priceInCents * item?.quantity).toLocaleString('pt-CV', {
                                                    style: 'currency',
                                                    currency: 'CVE'
                                                })}
                                            </TableCell>
                                        </TableRow>
                                ))}
                            </TableBody>

                            <TableFooter>
                                <TableCell colSpan={3}> Total do Pedido </TableCell>
                                <TableCell className="text-right">
                                    {order?.totalInCents.toLocaleString('pt-CV', {
                                        style: 'currency',
                                        currency: 'CVE'
                                    })}
                                </TableCell>
                            </TableFooter>
                        </Table>
                    </div>
                ) : (
                    <OrderDetailSkeleton/>
                )}
            </DialogContent>
        </div>
    )
}