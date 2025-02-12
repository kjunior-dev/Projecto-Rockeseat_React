// Estilos para a tabela
import {styled} from "@ignite-ui/react";

export const Table = styled('table', {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1rem',
    fontFamily: "'Roboto', sans-serif",
    fontSize: '1rem',
    borderRadius: '8px', // Adicionando borderRadius à tabela
    overflow: 'hidden', // Garantir que a borda arredondada seja visível corretamente
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Adicionando sombra para efeito
});

// Estilos para o cabeçalho da tabela
export const TableHeader = styled('th', {
    padding: '1rem',
    textAlign: 'left',
    backgroundColor: '#202024',
    fontWeight: '600',
    color: '#333',
    borderBottom: '2px solid #ddd',
    textTransform: 'uppercase',
});

// Estilos para as células da tabela
export const TableCell = styled('td', {
    padding: '1rem',
    borderBottom: '1px solid #f0f0f0',
    color: '#555',
    fontWeight: '500',
});

// Estilo para as linhas alternadas da tabela
export const TableRow = styled('tr', {
    '&:nth-child(even)': {
        backgroundColor: '#f9f9f9',
    },
});