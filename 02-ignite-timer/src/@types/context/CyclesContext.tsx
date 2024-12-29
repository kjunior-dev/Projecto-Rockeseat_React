import {createContext, ReactNode, useEffect, useReducer, useState} from "react";
import {Cycle, cyclesReducer} from "../../reducers/cycles/reducer.ts";
import {
    addNewCycleAction,
    interruptCurrentCycleAction,
    markCurrentCycleAsFinisehdAction
} from "../../reducers/cycles/action.ts";
import {differenceInSeconds} from "date-fns";
/*
Esta interface define o modelo de dados de um ciclo. Um ciclo representa uma tarefa
que possui um nome, duração em minutos, data de início e um identificador único.
*///

interface CyclesContextType {
    cycles: Cycle[];
    activeCycle: Cycle | undefined;
    activeCycleId: string | null;
    amoutSecondsPassed: number; // Data e hora
    setSecondsPassed: (seconds: number) => void;
    markCurrentCycleAsFinished: () => void;
    createNewCycle: (data: CreateCycleData) => void;
    interruptCurrentCycle: () => void;
}

interface CreateCycleData {
    task: string; // Nome da tarefa
    minutesAmount: number; // Duração do ciclo em minutos
}

export const CyclesContext = createContext({} as CyclesContextType);

interface CycleContextProviderProps {
    children: ReactNode;
}


export function CyclesContextProvider({children}: CycleContextProviderProps) {

    const [cyclesState, dispatch] = useReducer(
        cyclesReducer,
        {
            cycles: [],
            activeCycleId: null
        },
        (initialState) => {
                const storedStateASJSON = localStorage.getItem('@ignite-timer:cycles-state-1.0.0');

                if (storedStateASJSON){
                    return JSON.parse(storedStateASJSON)
                }

                return initialState;
        },
    )

    const {cycles, activeCycleId} = cyclesState;
    // Obtém o ciclo ativo com base no ID armazenado no estado
    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

    const [amoutSecondsPassed, setAmountSecondsPassed] = useState(() => {
        if (activeCycle){
            return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
        }

        return 0
    });

    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds)
    }

    // Função chamada ao enviar o formulário para criar um novo ciclo
    function createNewCycle(data: CreateCycleData) {
        const id = String(new Date().getTime()); // Gera um ID único com base no timestamp atual
        const newCycle: Cycle = {
            id, // ID único
            task: data.task, // Nome da tarefa
            minutesAmount: data.minutesAmount, // Duração do ciclo
            startDate: new Date() // Data e hora de início do ciclo
        };

        dispatch(addNewCycleAction(newCycle))

        setAmountSecondsPassed(0)
    }

    useEffect(() => {
        const stateJson = JSON.stringify(cyclesState);

        localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJson);
    }, [cyclesState]);

    function markCurrentCycleAsFinished() {
        dispatch(markCurrentCycleAsFinisehdAction())
    }

    // funçao para interromper um ciclo
    function interruptCurrentCycle() {
        dispatch(interruptCurrentCycleAction())
    }

    return (
        <CyclesContext.Provider
            value={{
                cycles,
                activeCycle,
                activeCycleId,
                amoutSecondsPassed,
                setSecondsPassed,
                markCurrentCycleAsFinished,
                interruptCurrentCycle,
                createNewCycle
            }}
        >
            {children}
        </CyclesContext.Provider>
    )
}