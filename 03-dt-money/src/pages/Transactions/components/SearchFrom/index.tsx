import {SearchFromContainer} from "./styles.ts";
import {MagnifyingGlass} from "phosphor-react";
import {useForm} from "react-hook-form";
import * as zod from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import {TransactionsContext} from "../../../../context/TransactionContext.tsx";
import {useContextSelector} from "use-context-selector";
import {memo} from 'react';

/*
*  Porque um componente renderiza?
* <=> Ha 3 Motivos
* - O primeiro é Hooks Changes => Onde pode acontecer ( Mudança de estado, mudou contexto e reducer mudou... )
* - O Segundo motivo é Props Changes => ( Mudou Propriédade )
* - O Terceiro Parent Rerendered ( Componente Pai Renderizou )
*
*  <=> Qual o fluxo de renderização?
* 1. O React recria o HTML da interface daquele componente
* 2. Compara a versao do HTML recriada com a versao anterior
* 3. Se mudou alguma. coisa, ele reescreve o HTML na tela
*
*  <> Memo <>

* 0. Se Hooks changed, ou Props changed, ai entra o ( deep comparison ) onde faz a comparração...
* 0.1 Comparando a versao anterior dos hooks e props
* 0.2 Se mudou algo, ele vai permitir a nova renderização
*/

const searchFormSchema = zod.object({
    query: zod.string(),
})

type SearchFromInputs = zod.infer<typeof searchFormSchema>;

function SearchFromComponente() {

    const fetchTransactions = useContextSelector( // useContextSelector mesma coisa com o useContext, so que ele renderiza algo especifico
        TransactionsContext,
        (context) => {
        return context.fetchTransactions
    })

    const {
            register,
            handleSubmit,
            formState: { isSubmitting }
    } = useForm<SearchFromInputs>({
        resolver: zodResolver(searchFormSchema),
    });

    async function handleSearchTransactions(data: SearchFromInputs){
        await fetchTransactions(data.query);

        console.log(data)
    }

    return (
        <SearchFromContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder="Pesquisar transações..."
                {...register('query')}

            />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFromContainer>
    )
}

export const SearchFrom = memo(SearchFromComponente)