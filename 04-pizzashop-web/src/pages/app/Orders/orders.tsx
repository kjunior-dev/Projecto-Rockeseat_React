import {Helmet} from "react-helmet-async";
import {Table, TableBody, TableHead, TableHeader, TableRow} from "../../../components/ui/table.tsx";
import {OrderTableRow} from "./order-table-row.tsx";
import {OrderTableFilter} from "./order-table-filter.tsx";
import {Pagination} from "../../../components/pagination.tsx";

export function Orders() {
    return (
        <>
            <Helmet title="Pedidos"/>

            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight"> Pedidos</h1>
                <div className="space-y-2.5">
                    <OrderTableFilter/> {/* componente filtro */}

                    <div className="border rounded-md">
                        <Table>
                            <TableHeader> {/* Isso é o Nosso thead => define o cabeçalho da tabela*/}
                                <TableRow> {/* Isso é o Nosso tr => representa uam linha na tabela */}
                                    <TableHead
                                        className="w-[64px]"></TableHead> {/* Isso é o Nosso th => Representa uma célula de cabeçalho */}
                                    <TableHead className="w-[140px]">Identificador</TableHead>
                                    <TableHead className="w-[180px]">Realizado há</TableHead>
                                    <TableHead className="w-[140px]">Status</TableHead>
                                    <TableHead>Cliente</TableHead>
                                    <TableHead className="w-[140px]">Total do pedido</TableHead>
                                    <TableHead className="w-[164px]"></TableHead>
                                    <TableHead className="w-[132px]"></TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody> {/* Isso é o Nosso tbody => Representa o corpo principal de uma tabela */}
                                {Array.from({length: 6}).map((_, index) => (

                                    <OrderTableRow key={index}/>  /* COmponente Row da tabela*/
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <Pagination pageIndex={0} totalCount={105} perPage={10}/>
                </div>
            </div>
        </>
    )
}