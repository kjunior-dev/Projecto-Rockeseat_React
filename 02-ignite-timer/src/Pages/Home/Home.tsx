// Importa os ícones e bibliotecas necessárias
import { Play } from "@phosphor-icons/react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import * as zod from 'zod';

// Importa os estilos para o componente
import {
    CountdownContainer,
    FormContainer,
    HomeContainer,
    MinutesAmountInput,
    Separator,
    StartCountdownButton,
    TaskInput
} from "./styles.ts";

/*
Essa função é um exemplo do que a função register do react-hook-form retorna.
Ela fornece eventos e propriedades que permitem integrar campos de formulário.
*///

// Interface para o ciclo, representando uma tarefa com duração
interface Cycle {
    id: string; // ID único para cada ciclo
    task: string; // Nome da tarefa
    minutesAmount: number; // Duração em minutos
}

// Define um esquema de validação usando Zod para os dados do formulário
const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'), // Tarefa é obrigatória
    owner: zod.string().optional(), // Proprietário é opcional
    minutesAmount: zod.number().min(5).max(60, 'O tempo deve ser entre 5 e 60 minutos'), // Validação de tempo
})

// Define o tipo dos dados do formulário com base no esquema de validação
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
    // Estado local para armazenar os ciclos criados
    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

    // Inicializa o formulário com validação e valores padrão
    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema), // Usa o esquema de validação
        defaultValues: {
            task: '', // Tarefa inicial vazia
            minutesAmount: 0, // Tempo inicial zero
            owner: '' // Proprietário inicial vazio
        }
    });

    // Função chamada ao enviar o formulário para criar um novo ciclo
    function handleCreateNewCycle(data: NewCycleFormData) {
        const id = String(new Date().getTime());
        const newCycle: Cycle = {
            id, // Gera um ID único baseado no timestamp
            task: data.task, // Nome da tarefa
            minutesAmount: data.minutesAmount, // Duração da tarefa
        };
        // O state pega o estado atual do cycle depois copia o estado atual (...state) ou adicionar novo ciclo no final
        setCycles((state) => [...state, newCycle]); // Atualiza o estado adicionando o novo ciclo à lista existente
        setActiveCycleId(id);

        reset(); // Reseta o formulário após o envio
    }

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

    // Observa o campo "task" para habilitar/desabilitar o botão de submit
    const task = watch('task');
    const isSubmitDisable = !task; // Desabilita o botão se "task" estiver vazio

    return (
        <HomeContainer> {/* Container principal da página Home */}
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action=""> {/* Formulário principal */}
                <FormContainer> {/* Container do formulário */}
                    <label htmlFor="task">Vou Trabalhar em</label> {/* Rótulo para a tarefa */}
                    <TaskInput
                        type="text"
                        id="task"
                        list="task-suggestions" // Conecta com a lista de sugestões
                        placeholder={"De um nome para o seu projeto"}
                        {...register('task')} // Registra o campo no react-hook-form
                    />

                    <datalist id="task-suggestions"> {/* Sugestões pré-definidas */}
                        <option value="Projeto 1"></option>
                        <option value="Projeto 2"></option>
                        <option value="Projeto 3"></option>
                        <option value="Projeto 4"></option>
                    </datalist>

                    <label htmlFor="minutesAmount">Durante</label> {/* Rótulo para o tempo */}
                    <MinutesAmountInput
                        type="number"
                        id="minutesAmount"
                        placeholder={"00"}
                        step={5} // Incrementos de 5 minutos
                        min={5} // Valor mínimo
                        max={60} // Valor máximo
                        {...register('minutesAmount', { valueAsNumber: true })} // Registra o campo e converte para número
                    />
                    <span>Minutos.</span> {/* Indica a unidade de tempo */}
                </FormContainer>

                <CountdownContainer> {/* Container para o contador regressivo */}
                    <span>0</span> {/* Primeiro dígito do contador */}
                    <span>0</span> {/* Segundo dígito do contador */}
                    <Separator>:</Separator> {/* Separador dos dígitos */}
                    <span>0</span> {/* Terceiro dígito do contador */}
                    <span>0</span> {/* Quarto dígito do contador */}
                </CountdownContainer>

                <StartCountdownButton disabled={isSubmitDisable} type="submit"> {/* Botão de submit */}
                    <Play size={24}/> Começar {/* Ícone e texto do botão */}
                </StartCountdownButton>
            </form>
        </HomeContainer>
    );
}