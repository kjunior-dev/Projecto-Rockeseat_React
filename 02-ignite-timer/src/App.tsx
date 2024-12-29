import {ThemeProvider} from "styled-components";
import { BrowserRouter } from "react-router-dom";

import {defaultTheme} from "./styles/themes/default.ts";
import {Router} from "./Router.tsx";
import {GlobalStyales} from "./global.ts";
import {CyclesContextProvider} from "./@types/context/CyclesContext.tsx";

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter> {/* BrouwserRouter permite renderizar rotas aninhadas */}
               <CyclesContextProvider> {/*Component CyclesContextProvider para partilhar dados para todos os components da aplicaçao */}
                 <Router/> {/* Renderiza o componente `Router` que contém todas as rotas do aplicativo */ }
               </CyclesContextProvider>
            </BrowserRouter>
            <GlobalStyales/> {/* Renderiza o componente `GlobalStyales` que contém as estilizações globais do aplicativo */ }
        </ThemeProvider>
  )
}
