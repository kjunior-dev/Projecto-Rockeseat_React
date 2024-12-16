import styled from "styled-components";

export const HeaderContainer = styled.header` // Estilização do container principal do Header
    display: flex; // Usa flexbox para organizar os elementos em linha
    align-content: center; // Define alinhamento de conteúdo no eixo cruzado
    justify-content: space-between; // Espaço entre os elementos principais (logo e navegação)

    nav {
        display: flex; // Flexbox para organizar os links de navegação
        gap: 0.5rem; // Espaçamento entre os links

        a {
            width: 3rem; // Define a largura dos links
            height: 3rem; // Define a altura dos links

            display: flex; // Usa flexbox para centralizar o conteúdo interno
            justify-content: center; // Alinha o conteúdo no centro horizontalmente
            align-items: center; // Alinha o conteúdo no centro verticalmente

            color: ${props => props.theme['gray-100']}; // Define a cor do texto com base no tema

            border-top: 3px solid transparent; // Cria uma borda superior invisível
            border-bottom: 3px solid transparent; // Cria uma borda inferior invisível

            &:hover {
                border-bottom-color: ${props => props.theme['green-500']}; // Muda a cor da borda inferior ao passar o mouse
            }

            &.active {
                color: ${props => props.theme['green-500']}; // Muda a cor do texto quando o link está ativo
            }
        }
    }
`;
