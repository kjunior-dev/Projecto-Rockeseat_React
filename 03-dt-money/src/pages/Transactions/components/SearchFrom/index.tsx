import {SearchFromContainer} from "./styles.ts";
import {MagnifyingGlass} from "phosphor-react";
import {useForm} from "react-hook-form";
import * as zod from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import {useContext} from "react";
import {TransactionsContext} from "../../../../context/TransactionContext.tsx";

const searchFormSchema = zod.object({
    query: zod.string(),
})

type SearchFromInputs = zod.infer<typeof searchFormSchema>;

export function SearchFrom() {

    const { fetchTransactions } = useContext(TransactionsContext)

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