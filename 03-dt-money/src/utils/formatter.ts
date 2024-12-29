export const dateFFormatter = new Intl.DateTimeFormat('pt-CV'); // Formatar Data

export const priceFormatter = new Intl.NumberFormat('pt-CV', { // Formatar Number
    style: 'currency',
    currency: 'CVE',
})
