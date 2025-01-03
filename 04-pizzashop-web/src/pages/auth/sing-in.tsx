import {Helmet} from "react-helmet-async";

import {Label} from "../../components/ui/label.tsx";
import {Input} from "../../components/ui/input.tsx";
import {Button} from "../../components/ui/button.tsx";

import {useForm} from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {toast} from 'sonner'
import {Link} from 'react-router-dom'

const singInForm = z.object({
    email: z.string().email(),
})

type SingInForm = z.infer<typeof singInForm>

export function SingIn() {

    const {register, handleSubmit, formState: {isSubmitting}} = useForm<SingInForm>({
        resolver: zodResolver(singInForm)
    })

    async function handleSingIng(data: SingInForm) {
        console.log(data)
        await new Promise((resolve) => setTimeout(resolve, 2000))

        toast.success('Enviamos um link autenticação para seu email.', {
            action: {
                label: 'Reenviar',
                onClick: () => handleSingIng(data),
            }
        })
    }

    return (
        <>
            <Helmet title="Login"/>
            <div className="p-8">
                <Button asChild variant="ghost">
                    <Link to={"/sing-Up"} className="absolute right-8 top-8">
                        Novo Estabelecimento
                    </Link>
                </Button>
                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className=" flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Acessar Painel</h1>
                        <p className="text-sm text-muted-foreground">Acompanha suas vnedas pelo painel do parceiro!</p>
                    </div>

                    <form action="" className="space-y-2" onSubmit={handleSubmit(handleSingIng)}>
                        <div className="space-y-2">
                            <Label htmlFor="email"> Seu e-mail</Label>
                            <Input
                                id="email"
                                type="email"
                                {...register('email')}
                            />
                        </div>
                        <Button className="w-full" disabled={isSubmitting} type="submit">Acessar Painel</Button>
                    </form>

                </div>
            </div>
        </>
    )
}