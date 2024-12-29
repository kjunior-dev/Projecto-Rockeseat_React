import * as Dialog from "@radix-ui/react-dialog";
import {CloseButton, Content, Overlay, TransactionType, TransactionTypeButton} from "./styles.ts";
import {ArrowCircleDown, ArrowCircleUp, X} from "phosphor-react";
import * as zod from 'zod';
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {api} from "../../lib/axios.ts";

const newTransationModalFormSchema = zod.object({
    description: zod.string(),
    price: zod.number(),
    category: zod.string(),
    type: zod.enum(["income", "outcome"]), // valida se o type é 'income' ou 'outcome'
})

type NewTransationFromInputs = zod.infer<typeof newTransationModalFormSchema>;

export function NewTransationModal() {

    const { control, register, handleSubmit, formState: {isSubmitting} } = useForm<NewTransationFromInputs>({
        resolver: zodResolver(newTransationModalFormSchema),
        defaultValues:{
            type: 'income',
        }
    })

    // Registrando dados com o api configurado com a axios usado o metodo post.
    async function handleCreatNewTransaction(data: NewTransationFromInputs){

        const { description, type, price, category } = data; // Distriturando do dentro do data os campos que vao ser salvo.

        try {
           const data = await api.post('/transactions', { // Gravando dados no server.json usando api e o metodo post
                description,
                type,
                price,
                category,
               createdAt: new Date(),
            })

            console.log("Sucessfully created transaction", data)
        }catch (error) {
            console.error("Error creating transaction", error)
        }
    }

    return (
        <div>
            <Dialog.Portal>
                <Overlay/>
                <Content>
                    <Dialog.Title>Nova Transação</Dialog.Title>

                    <CloseButton>
                        <X size={28}/>
                    </CloseButton> {/* Botao de fechar modal */}

                    <form onSubmit={handleSubmit(handleCreatNewTransaction)}>
                        <input
                            type="text"
                            placeholder="Descrição"
                            required
                            {...register('description')}
                        />

                        <input
                            type="number"
                            placeholder="Preço"
                            required
                            {...register('price', {valueAsNumber: true})}
                        />

                        <input
                            type="text"
                            placeholder="Categoria"
                            required
                            {...register('category')}
                        />

                        <Controller
                            control={control}
                            name='type'
                            render={ ({ field }) => {
                                return(
                                    <TransactionType onValueChange={field.onChange} value={field.value}>
                                        <TransactionTypeButton variant={'income'} value={"income"}>
                                            <ArrowCircleUp size={24}/>
                                            Entrada
                                        </TransactionTypeButton>
                                        <TransactionTypeButton variant={'outcome'} value={"outcome"}>
                                            <ArrowCircleDown size={24}/>
                                            Saída
                                        </TransactionTypeButton>
                                    </TransactionType>
                                )
                            }}
                        />
                        <button type="submit" disabled={isSubmitting}>Cadastrar</button>
                    </form>
                </Content>
            </Dialog.Portal>
        </div>
    )
}