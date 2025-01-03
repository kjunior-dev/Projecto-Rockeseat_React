import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "./ui/dropdown-menu.tsx";
import {Button} from "./ui/button.tsx";
import {Building, ChevronDown, LogOut} from "lucide-react";

export function AccountMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 select-none">
                    Pizza Shop
                    <ChevronDown className="h-4 w-4"/>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                    <DropdownMenuLabel className="flex flex-col">
                        <span>Kevin Sousa</span>
                        <span className="text-xs font-normal text-muted-foreground">kjsousa.l20@us.edu.cv</span>
                    </DropdownMenuLabel>
                </DropdownMenuItem>

                <DropdownMenuSeparator/>

               <DropdownMenuItem>
                       <Building className="mr-2 h-4 w-4"/>
                       <span>
                       Perfil da Loja
                    </span>
               </DropdownMenuItem>

                <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                       <LogOut className="mr-2 h-4 w-4"/>
                       <span>
                       Sair
                    </span>
               </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}