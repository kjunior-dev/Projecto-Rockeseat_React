import { FormContainer, TaskInput, MinutesAmountInput } from "./styles";
import {useFormContext} from "react-hook-form";
import {useContext} from "react";
import {CyclesContext} from "../../../../@types/context/CyclesContext.tsx";

export function NewCycleForm() {

    const { activeCycle } = useContext(CyclesContext);
    const { register } = useFormContext()

    return (
        <FormContainer> {/* Container do formulário */}
            <label htmlFor="task">Vou trabalhar em</label> {/* Rótulo do campo "task" */}
            <TaskInput
                type="text"
                id="task"
                list="task-suggestions" // Conecta com a lista de sugestões de tarefas
                placeholder="Dê um nome para o seu projeto"
                disabled={!!activeCycle}
                {...register('task')} // Registra o campo no formulário
            />

            <datalist id="task-suggestions"> {/* Sugestões de tarefas */}
                <option value="Projeto 1" />
                <option value="Projeto 2" />
                <option value="Projeto 3" />
                <option value="Projeto 4" />
            </datalist>

            <label htmlFor="minutesAmount">Durante</label> {/* Rótulo do campo "minutesAmount" */}
            <MinutesAmountInput
                type="number"
                id="minutesAmount"
                placeholder="00"
                step={5} // Incrementa de 5 em 5 minutos
                min={1} // Valor mínimo permitido
                max={60} // Valor máximo permitido
                disabled={!!activeCycle}
                {...register('minutesAmount', { valueAsNumber: true })} // Registra o campo no formulário
            />
            <span>Minutos.</span> {/* Texto indicando a unidade de tempo */}
        </FormContainer>
    );
}