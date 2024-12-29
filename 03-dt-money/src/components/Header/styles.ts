import styled, {css} from "styled-components";
export const HeaderContainer = styled.header`
    background: ${props => props.theme['gray-900']};
    padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
    background: ${props => props.theme['gray-900']};
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex; 
    justify-content: space-between;
    align-items: center;
`;

export const NewTransactionButton = styled.button`
    height: 50px;
    border: 0;
    background: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background: ${props => props.theme['green-700']};
        transition: background-color 0.2s;
    }
`;

interface SummaryCardProps {
    variant?: 'green';
}

export const SummaryCard = styled.div<SummaryCardProps>`
    background: ${props => props.theme['gray-600']};
    border-radius: 6px;
    padding: 2rem;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${props => props.theme['gray-300']};

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
        }
    }

    ${props => props.variant === 'green' && css`
        background: ${props => props.theme['green-700']};
        color: ${props => props.theme.white};
    `}
`;