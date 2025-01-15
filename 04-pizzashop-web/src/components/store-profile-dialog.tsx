import {DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "./ui/dialog.tsx";
import {Button} from "./ui/button.tsx";
import {Label} from "./ui/label.tsx";
import {Input} from "./ui/input.tsx";
import {Textarea} from "./ui/textarea.tsx";
import {useForm} from "react-hook-form";
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {getManagerRestautant, GetManagerRestautantResponse} from "../api/get-manager-restautant.ts";
import {updateProfile} from "../api/update-profile.ts";
import {toast} from "sonner";

const storeProfileShema = z.object({
    name: z.string().min(1),
    description: z.string().nullable(),
})

type StoreProfileShema = z.infer<typeof storeProfileShema>;

export function StoreProfileDialog() {

    const queryClient = useQueryClient();

    const {data: managedRestaurant} = useQuery({
        queryKey: ['manager-restaurant'],
        queryFn: getManagerRestautant,
        staleTime: Infinity,
    })

    const {
        register,
        handleSubmit,
        formState: {isSubmitting}
    } = useForm<StoreProfileShema>({
        resolver: zodResolver(storeProfileShema),

        values: {
            name: managedRestaurant?.name ?? "",
            description: managedRestaurant?.description ?? "",
        }
    })

    function updateManagedRestaurantCache({name, description}: StoreProfileShema){
        const cached = queryClient.getQueryData<GetManagerRestautantResponse>(['manager-restaurant'])

        if (cached){
            queryClient.setQueryData<GetManagerRestautantResponse>(['manager-restaurant'], {
                ...cached,
                name,
                description
            })
        }

        return { cached }
    }

    const { mutateAsync: updateProfileFn } = useMutation({
        mutationFn: updateProfile,
        onMutate({name, description}){
           const { cached } = updateManagedRestaurantCache({ name, description });

           return { previosProfile: cached}
        },
        onError(_, __, context){
            if (context?.previosProfile){
                updateManagedRestaurantCache(context.previosProfile)
            }
        }
    })

    async function handleUpdateProfile(data: StoreProfileShema) {
        /*try {
            await updateProfile(
                data
            )

            toast.success('Perfil atualizado com sucesso!')
        }catch{
            toast.error('Erro ao atualizar perfil.')
        }*/
        try {
            await updateProfileFn({
                name: data.name,
                description: data.description ?? ''
            })
            toast.success('Perfil atualizado com sucesso!')
        }catch{
            toast.error('Erro ao atualizar perfil.')
        }
    }

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Perfil da loja
                </DialogTitle>

                <DialogDescription>
                    Atualiza as informações do seu estabelecimento visiveis ao seu cliente.
                </DialogDescription>
            </DialogHeader>


            <form onSubmit={handleSubmit(handleUpdateProfile)}>
                <div className="space-y-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor={"name"}>
                            Nome
                        </Label>

                        <Input className="col-span-3" id={"name"} {...register('name')}/>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor={"description"}>
                            Descrição
                        </Label>

                        <Textarea className="col-span-3" id={"description"} {...register('description')}/>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type={"button"} variant={"ghost"}>
                            Cancelar
                        </Button>
                    </DialogClose>

                    <Button type={"submit"} variant={"success"} disabled={isSubmitting}>
                        Salvar
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}