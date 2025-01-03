import {TableCell, TableRow} from "../../../components/ui/table.tsx";
import {Button} from "../../../components/ui/button.tsx";
import {ArrowRight, Search, X} from "lucide-react";
import {Dialog, DialogTrigger} from "../../../components/ui/dialog.tsx";
import {OrderDetails} from "./order-details.tsx";

export function OrderTableRow(){

    return(
        <TableRow> {/* Isso é o Nosso tr => representa uam linha na tabela */}
            <TableCell> {/* Isso é o Nosso td => Representa uma célula de dados dentro de uma linha da tabela */}
                <Dialog>
                    {/* O DialogTrigger ja é um botao, se queremos que o nosso button comporte como um trigger so colocar asChild no Trigger*/}
                    <DialogTrigger asChild>
                        <Button variant="outline" size="xs">
                            <Search className="h-3 w-3"/>
                            <span className="sr-only">Detalhes do pedido</span>
                        </Button>
                    </DialogTrigger>

                    <OrderDetails/> {/* Componente do modal com detalhes do pedido usando DialogContent de DialogTitl e Description */}
                </Dialog>
            </TableCell>

            <TableCell className="font-mono text-xs font-medium">78gfgw5ry2hg3y3fbwsd182</TableCell>
            <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
            <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                <span className="font-medium text-muted-foreground">Pendente</span>
            </div>
            <TableCell className="font-medium"> Kevin Sousa</TableCell>
            <TableCell className="font-medium">149$00</TableCell>
            <TableCell>
                <Button className="text-green-500" variant="ghost" size="xs">
                    <ArrowRight className="mr-2 h-3 w-3 text-green-500"/>
                    Aprovar
                </Button>
            </TableCell>
            <TableCell>
                <Button className="text-rose-700" variant="ghost" size="xs">
                    <X className="mr-2 h-3 w-3 text-rose-700"/>
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
    )
}