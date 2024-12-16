import styled from "styled-components";

export const LayoutContainer = styled.div`
    max-width: 74rem;// Define a largura máxima do container como 74rem (aproximadamente 1184px).
    height: calc(100vh - 10rem);// Define a altura do container como 100% da altura da tela menos 10rem.
    margin: 5rem auto;// Centraliza horizontalmente e adiciona uma margem superior e inferior de 5rem.
    padding: 2.5rem;// Define um preenchimento interno de 2.5rem.
    background: ${props => props.theme['gray-800']};// Aplica a cor de fundo obtida do tema (chave 'gray-800').
    border-radius: 8px;// Define bordas arredondadas com raio de 8px.
    display: flex; // Usa o flexbox para alinhar os elementos dentro do container.
    flex-direction: column;// Organiza os elementos do container em uma coluna.
`;