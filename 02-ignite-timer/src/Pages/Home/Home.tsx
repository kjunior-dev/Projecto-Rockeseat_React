// Importa os ícones e bibliotecas necessárias
import {Play, HandPalm} from "@phosphor-icons/react"; // Ícone de play para o botão de iniciar
import {FormProvider, useForm} from 'react-hook-form'; // Biblioteca para manipulação de formulários
import {zodResolver} from '@hookform/resolvers/zod'; // Conector entre Zod e react-hook-form
import * as zod from 'zod'; // Biblioteca para validação de dados

// Importa os estilos personalizados do componente
import {
    HomeContainer,
    StartCountdownButton,
    StopCountdownButton,
} from "./styles.ts";
import {NewCycleForm} from "./components/NewCycleForm";
import {Countdown} from "./components/Countdown";
import {useContext} from "react";
import {CyclesContext} from "../../@types/context/CyclesContext.tsx"; // Estilos para os componentes visuais

// Cria o tipo NewCycleFormData com base no esquema de validação definido
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

// Define o esquema de validação dos dados do formulário utilizando a biblioteca Zod
const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'), // Valida que o campo "task" é uma string e é obrigatório
    owner: zod.string().optional(), // Campo "owner" é opcional
    minutesAmount: zod.number()
        .min(1, 'O tempo mínimo é de 5 minutos') // Valida que o tempo mínimo é 5 minutos
        .max(60, 'O tempo máximo é de 60 minutos'), // Valida que o tempo máximo é 60 minutos
});

// Componente principal da página
export function Home() {

    const {
        createNewCycle,
        activeCycle,
        interruptCurrentCycle
    } = useContext(CyclesContext)

    // Configuração do formulário utilizando react-hook-form
    const newCycleForm  = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema), // Usa Zod para validação
        defaultValues: {
            task: '', // Valor padrão para o campo "task"
            minutesAmount: 0, // Valor padrão para o campo "minutesAmount"
            owner: '' // Valor padrão para o campo "owner"
        }
    });
    const { handleSubmit, watch, reset } = newCycleForm

    function handleCreateNewCycle(data: NewCycleFormData){
        createNewCycle(data)
        reset(); // Reseta os valores do formulário para os valores padrão
    }

    // Observa o valor do campo "task" para habilitar ou desabilitar o botão de submit
    const task = watch('task');
    const isSubmitDisable = !task; // Desabilita o botão se "task" estiver vazio

    /*
    * Prop Drilling --> Quando a gente tem muitas propriedades apenas para comunicaçao entre componentes
    * Context API --> Permite compartilhar informaçao entre varios componentes ao mesmo tempo
    * *///
    return (
        <HomeContainer> {/* Container principal */}
            <form onSubmit={handleSubmit(handleCreateNewCycle)}> {/* Formulário para criar um novo ciclo */}

                <FormProvider {...newCycleForm} >
                    <NewCycleForm />{/* Componente Formulário para adicionar uma nova tarefa */}
                </FormProvider>

                <Countdown/> {/* Componente Countdown */}

                {activeCycle ? (
                    <StopCountdownButton type="button" onClick={interruptCurrentCycle}> {/* Botão de iniciar o ciclo */}
                        <HandPalm size={24}/> {/* Ícone de play */}
                        Interronper
                    </StopCountdownButton>
                ) : (
                    <StartCountdownButton disabled={isSubmitDisable} type="submit"> {/* Botão de iniciar o ciclo */}
                        <Play size={24}/> {/* Ícone de play */}
                        Começar
                    </StartCountdownButton>
                )}
            </form>
        </HomeContainer>
    );
}