import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "./ui/dropdown-menu.tsx";
import {Button} from "./ui/button.tsx";
import {Building, ChevronDown, LogOut} from "lucide-react";
import {useMutation, useQuery} from "@tanstack/react-query";
import {getProfile} from "../api/get-profile.ts";
import {getManagerRestautant} from "../api/get-manager-restautant.ts";
import {Skeleton} from "./ui/skeleton.tsx";
import {Dialog, DialogTrigger} from "./ui/dialog.tsx";
import {StoreProfileDialog} from "./store-profile-dialog.tsx";
import {signOut} from "../api/sign-out.ts";
import {useNavigate} from "react-router-dom";

export function AccountMenu() {

    const navigate = useNavigate();

    const {data: profile, isLoading: isLoadingProfile} = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile,
        staleTime: Infinity,
    })

    console.log("Porfile => ", profile)

    const {data: managedRestaurant, isLoading: isLoadingManagerRestaurant} = useQuery({
        queryKey: ['manager-restaurant'],
        queryFn: getManagerRestautant,
        staleTime: Infinity,
    })

    const { mutateAsync: signOutFn, isPending: isSinngOut } = useMutation({
        mutationFn: signOut,
        onSuccess: () => {
            navigate('/sing-in', {replace: true})
        }
    })

    return (
       <Dialog>
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

                   <DialogTrigger asChild>
                       <DropdownMenuItem>
                           <Building className="mr-2 h-4 w-4"/>
                           <span>
                            Perfil da Loja
                        </span>
                       </DropdownMenuItem>
                   </DialogTrigger>

                   <DropdownMenuItem asChild className="text-rose-500 dark:text-rose-400" disabled={isSinngOut}>
                       <button className="w-full" onClick={() => signOutFn()}>
                           <LogOut className="mr-2 h-4 w-4"/>
                           <span>
                              Sair
                           </span>
                       </button>
                   </DropdownMenuItem>
               </DropdownMenuContent>
           </DropdownMenu>

           <StoreProfileDialog/> {/* Componente do modal para editar o perfil da loja */}
       </Dialog>
    )
}