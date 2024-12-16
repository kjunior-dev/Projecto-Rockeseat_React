import { Outlet } from "react-router-dom";
import {Index} from "../../components/Header";
import {LayoutContainer} from "./styles.ts"; // Permite renderizar rotas aninhadas

export function DefaultLayout() {
    return (
        <LayoutContainer>
            {/* Renderiza o cabeçalho comum em todas as páginas */}
            <Index/> {/*Chamando Header.tsx detro do DefaultLayout porque repetimos o cabeçalho em todas as páginas*/}
            {/* O componente Outlet é um espaço reservado para as rotas aninhadas */}
            <Outlet/> {/* Outline recebe as rotas aninhadas =>  rotas aninhadas são rotas dentro de rotas. Outline é tipo um espaço reservado */}
        </LayoutContainer>
    )
}