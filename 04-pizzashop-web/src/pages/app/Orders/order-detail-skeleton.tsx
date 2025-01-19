import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow
} from "../../../components/ui/table.tsx";
import {Skeleton} from "../../../components/ui/skeleton.tsx";

export function OrderDetailSkeleton(){
    return (
        <div className="space-y-6">
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell className="text-muted-foreground"> Status </TableCell>
                        <TableCell className="flex justify-end">
                            <Skeleton className="h-5 w-20"/>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="text-muted-foreground"> Cliente </TableCell>
                        <TableCell className="flex justify-end">
                            <Skeleton className="h-5 w-[164px]"/>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="text-muted-foreground"> Telefone </TableCell>
                        <TableCell className="flex justify-end">
                            <Skeleton className="h-5 w-[140px]"/>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="text-muted-foreground"> Email </TableCell>
                        <TableCell className="flex justify-end">
                            <Skeleton className="h-5 w-[200px]"/>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="text-muted-foreground"> Realizado há </TableCell>
                        <TableCell className="flex justify-end">
                            <Skeleton className="h-5 w-[148px]"/>
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
                    {Array.from({length: 2}).map((_, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <Skeleton className="h-5 w-[140px]"/>
                            </TableCell>

                            <TableCell className="text-right">
                                <Skeleton className="h-5 w-3 ml-auto"/>
                            </TableCell>

                            <TableCell className="text-right">
                                <Skeleton className="h-5 w-12 ml-auto"/>
                            </TableCell>

                            <TableCell className="text-right">
                                <Skeleton className="h-5 w-12 ml-auto"/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

                <TableFooter>
                    <TableCell colSpan={3}> Total do Pedido </TableCell>
                    <TableCell className="text-right">
                        <Skeleton className="h-5 w-20"/>
                    </TableCell>
                </TableFooter>
            </Table>
        </div>
    )
}