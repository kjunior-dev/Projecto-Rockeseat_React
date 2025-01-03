import {Button} from "./ui/button.tsx";
import {ChevronsLeft, ChevronsRight} from "lucide-react";

export interface PaginationProps {
    pageIndex: number,
    totalCount: number,
    perPage: number,
}
export function Pagination({ pageIndex, perPage, totalCount} : PaginationProps){
    const pages = Math.ceil(totalCount / perPage) || 1;
    return(
        <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
                Total de {totalCount} item(s)
            </span>

            <div className="flex items-center gap-4 lg:gap-8">
                <div className="text-sm font-medium">
                    Pagina {pageIndex + 1} de {pages}
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="outline" className="h-6 w-8 p-0">
                        <ChevronsLeft className="h-4 w-4"/>
                        <span className="sr-only">Primeira Pagina</span>
                    </Button>

                    <Button variant="outline" className="h-6 w-8 p-0">
                        <ChevronsLeft className="h-4 w-4"/>
                        <span className="sr-only">Pagina anterior</span>
                    </Button>

                    <Button variant="outline" className="h-6 w-8 p-0">
                        <ChevronsRight className="h-4 w-4"/>
                        <span className="sr-only">Proxima Pagina</span>
                    </Button>

                    <Button variant="outline" className="h-6 w-8 p-0">
                        <ChevronsRight className="h-4 w-4"/>
                        <span className="sr-only">Ultima Pagina</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}