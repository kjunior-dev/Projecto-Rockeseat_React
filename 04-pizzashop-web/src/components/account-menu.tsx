import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "./ui/dropdown-menu.tsx";
import {Button} from "./ui/button.tsx";
import {Building, ChevronDown, LogOut} from "lucide-react";
import {useQuery} from "@tanstack/react-query";
import {getProfile} from "../api/get-profile.ts";
import {getManagerRestautant} from "../api/get-manager-restautant.ts";
import {Skeleton} from "./ui/skeleton.tsx";

export function AccountMenu() {

    const {data: profile, isLoading: isLoadingProfile} = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile,
    })

    console.log("Porfile => ", profile)

    const {data: managedRestaurant, isLoading: isLoadingManagerRestaurant} = useQuery({
        queryKey: ['manager-restaurant'],
        queryFn: getManagerRestautant,
    })

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 select-none">

                    {isLoadingManagerRestaurant
                        ? <Skeleton className="h-4 w-40"/>
                        : managedRestaurant?.name}
                    <ChevronDown className="h-4 w-4"/>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                    <DropdownMenuLabel className="flex flex-col">
                        {isLoadingProfile ? (
                            <div className="space-y-1.5">
                                <Skeleton className="h-4 w-32"/>
                                <Skeleton className="h-3 w-24"/>
                            </div>
                        ) : (
                            <>
                                 <span>
                                     {profile?.name}
                                 </span>
                                 <span className="text-xs font-normal text-muted-foreground">
                                    {profile?.email}
                                </span>
                            </>
                        )}
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