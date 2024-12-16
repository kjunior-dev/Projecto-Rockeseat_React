import { Timer, Scroll } from "@phosphor-icons/react"; // Importa ícones do pacote
import { HeaderContainer } from "./styles.ts"; // Importa o estilo do Header
import logoIgnite from "/ignite-logo.svg"; // Importa o logo do Ignite
import { NavLink } from "react-router-dom"; // Importa o componente NavLink para navegação

export function Index() {
    return (
        <HeaderContainer>
            <img src={logoIgnite} alt="Logo do Ignite" /> {/* Exibe o logo do Ignite */}
            <nav>
                {/* Link para a rota raiz */}
                <NavLink to="/" title="Cronômetro">
                    <Timer size={24} /> {/* Ícone de cronômetro */}
                </NavLink>
                {/* Link para a rota de histórico */}
                <NavLink to="/history" title="Histórico">
                    <Scroll size={24} /> {/* Ícone de histórico */}
                </NavLink>
            </nav>
        </HeaderContainer>
    );
}
