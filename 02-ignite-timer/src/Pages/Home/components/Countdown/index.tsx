import { CountdownContainer, Separator } from "./styles";
import {useContext, useEffect} from "react";
import {differenceInSeconds} from "date-fns";
import {CyclesContext} from "../../../../@types/context/CyclesContext.tsx";

export function Countdown() {

    const {
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amoutSecondsPassed,
        setSecondsPassed
    } = useContext(CyclesContext);

     // Calcula o total de segundos do ciclo ativo (se houver)
    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

    // Calcula os segundos restantes no ciclo ativo (se houver)
    const currentSeconds = activeCycle ? totalSeconds - amoutSecondsPassed : 0;

    // Hook que executa a cada vez que o ciclo ativo muda
    useEffect(() => {
        if (activeCycle) {
            // Configura um intervalo que atualiza a quantidade de segundos passados
            let interval = setInterval(() => {

                const secondsDifference = differenceInSeconds(
                    new Date(),
                    new Date(activeCycle.startDate),
                )

                if (secondsDifference >= totalSeconds) {

                     markCurrentCycleAsFinished();
                    // Atualizar a quantidade de segundos para refletir o estado final
                    setSecondsPassed(totalSeconds);
                    clearInterval(interval)
                } else {
                    setSecondsPassed(secondsDifference); // Calcula a diferença de segundos
                }

            }, 1000);

            // Limpa o intervalo quando o ciclo ativo for alterado ou o componente desmontar
            return () => clearInterval(interval);
        }
    }, [activeCycle, totalSeconds, activeCycleId, setSecondsPassed, markCurrentCycleAsFinished]);

    // Converte os segundos restantes em minutos e segundos
    const minutesAmount = Math.floor(currentSeconds / 60); // Obtém os minutos inteiros
    const secondsAmount = currentSeconds % 60; // Obtém o restante em segundos

    // Formata os minutos e segundos como strings de dois dígitos
    const minutes = String(minutesAmount).padStart(2, '0');
    const seconds = String(secondsAmount).padStart(2, '0');

    useEffect(() => {
        if (activeCycle) {
            document.title = `${minutes}:${seconds}`;
        }
    }, [minutes, seconds, activeCycle]); //Mudando title do navegador

    return (
        <CountdownContainer> {/* Container para o contador regressivo */}
            <span>{minutes[0]}</span> {/* Primeiro dígito dos minutos */}
            <span>{minutes[1]}</span> {/* Segundo dígito dos minutos */}
            <Separator>:</Separator> {/* Separador ":" */}
            <span>{seconds[0]}</span> {/* Primeiro dígito dos segundos */}
            <span>{seconds[1]}</span> {/* Segundo dígito dos segundos */}
        </CountdownContainer>
    )
}
