import {Button} from "./ui/button.tsx";
import {ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight} from "lucide-react";

export interface PaginationProps {
    pageIndex: number,
    totalCount: number,
    perPage: number,
    onPageChange: (pageIndex: number) => Promise<void> | void
}
export function Pagination({
   pageIndex,
   perPage,
   totalCount,
   onPageChange
} : PaginationProps){

    // Calcula o número total de páginas, arredondando para cima
    const pages = Math.ceil(totalCount / perPage) || 1; // Exemplo: Math.ceil(200 / 10) = Math.ceil(20) = 20

    return(
        <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
                Total de {totalCount} item(s)
            </span>

            <div className="flex items-center gap-4 lg:gap-8">
                <div className="text-sm font-medium">
                    {/* Exibe a página atual (começando de 1) e o total de páginas */}
                    Pagina {pageIndex + 1} de {pages}
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        onClick={() => onPageChange(0)}
                        variant="outline"
                        className="h-6 w-8 p-0"
                        disabled={pageIndex === 0}
                    >
                        <ChevronsLeft className="h-4 w-4"/>
                        <span className="sr-only">Primeira Pagina</span>
                    </Button>

                    <Button
                        onClick={() => onPageChange(pageIndex - 1)}
                        variant="outline"
                        className="h-6 w-8 p-0"
                    >
                        <ChevronLeft className="h-4 w-4"/>
                        <span className="sr-only">Pagina anterior</span>
                    </Button>

                    <Button
                        onClick={() => onPageChange(pageIndex + 1)}
                        variant="outline"
                        className="h-6 w-8 p-0"
                    >
                        <ChevronRight className="h-4 w-4"/>
                        <span className="sr-only">Proxima Pagina</span>
                    </Button>

                    <Button
                        onClick={() => onPageChange(pages - 1)}
                        variant="outline"
                        className="h-6 w-8 p-0 hover:legendary "
                        disabled={pages <= pageIndex + 1}
                    >

                        <ChevronsRight className="h-4 w-4"/>
                        <span className="sr-only">Ultima Pagina</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}