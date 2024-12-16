import { Routes, Route } from "react-router-dom";
import {Home} from "./Pages/Home/Home.tsx";
import {History} from "./Pages/History/History.tsx";
import {DefaultLayout} from "./layouts/DefaultLayout";
export function Router() {
    return (
        <Routes>
            {/* Define o container principal para todas as rotas do aplicativo */}
            <Route path={"/"} element={<DefaultLayout/>}>
                {/* Rota inicial que renderiza o componente `Home` dentro do layout padrão */}
                <Route path="/" element={<Home/>}/>

                {/* Rota adicional que renderiza o componente `History` dentro do layout padrão */}
                <Route path="/history" element={<History/>}/>
            </Route>
        </Routes>

    )
}