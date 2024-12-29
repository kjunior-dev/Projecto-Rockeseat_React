/*
import { createContext, useContext, useState } from "react";

// Cria um contexto chamado CyclesContext, que será usado para compartilhar o estado entre os componentes.
const CyclesContext = createContext({} as any);

function NewCycleForm() {
    // Obtém os valores activeCycle e setActiveCycle do contexto CyclesContext.
    let { activeCycle, setActiveCycle } = useContext(CyclesContext);

    return (
        <h1>
            {/!* Exibe o valor atual de activeCycle *!/}
            NewCycleForm: {activeCycle}

            {/!* Botão para alterar o estado de activeCycle para 2 *!/}
            <button onClick={() => {
                setActiveCycle("Kevin Junior"); // Atualiza o estado de activeCycle para 2
            }}>
                Alterar Estado do Ciclo
            </button>
        </h1>
    );
}

function Countdown() {
    // Obtém o valor de activeCycle do contexto CyclesContext.
    const { activeCycle } = useContext(CyclesContext);


    // Exibe o valor atual de activeCycle
    return <h1>Countdown: {activeCycle}</h1>;
}

export function Home() {
    // Define o estado local activeCycle com o valor inicial 0 e a função para atualizá-lo setActiveCycle.
    const [activeCycle, setActiveCycle] = useState("Kevin Sousa");

    return (
        // Fornece o estado activeCycle e a função setActiveCycle para os componentes filhos através do CyclesContext.Provider.
        <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
            <div>
                {/!* Renderiza o componente NewCycleForm *!/}
                <NewCycleForm />

                {/!* Renderiza o componente Countdown *!/}
                <Countdown />
            </div>
        </CyclesContext.Provider>
    );
}*/
