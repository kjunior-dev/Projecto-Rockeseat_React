import {ButtonCotainer, ButtonVariant} from "./Button.styles.ts";

interface ButtonProps {
    variant?: ButtonVariant;
}

export function Button({ variant = 'secondary' }: ButtonProps){
    return <ButtonCotainer variant={variant}>Enviar</ButtonCotainer>
}