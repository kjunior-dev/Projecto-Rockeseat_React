import {ThemeProvider} from "styled-components";
import { BrowserRouter } from "react-router-dom";

import {defaultTheme} from "./styles/themes/default.ts";
import {Router} from "./Router.tsx";
import {GlobalStyales} from "./global.ts";

export function App() {
  return (
    <div>
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter> {/* BrouwserRouter permite renderizar rotas aninhadas */}
                <Router/> { /* Renderiza o componente `Router` que contém todas as rotas do aplicativo */ }
            </BrowserRouter>

            <GlobalStyales/> { /* Renderiza o componente `GlobalStyales` que contém as estilizações globais do aplicativo */ }
        </ThemeProvider>
    </div>
  )
}
