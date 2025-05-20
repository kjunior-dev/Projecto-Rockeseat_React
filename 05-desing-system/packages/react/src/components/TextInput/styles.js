import { styled } from "../../styles/index";
export const TextInputContainer = styled('div', {
    backgroundColor: '$gray900',
    padding: '$3 $4',
    borderRadius: '$sm',
    boxSizing: 'border-box',
    border: '2px solid $gray900',
    display: 'flex',
    alignItems: 'baseline',
    '&:has(input:focus)': {
        borderColor: '$ignite300',
    },
    '&:has(input:disabled)': {
        opacity: 0.5,
        cursor: 'not-allowed',
    },
});
export const Prefix = styled('span', {
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$gray400',
    fontWeight: '$regular',
});
export const Input = styled('input', {
    all: 'unset',
    fontSize: '$sm',
    fontFamily: '$default',
    color: '$white',
    width: '100%',
    minHeight: 50,
    padding: '$3 $4',
    borderRadius: '$sm',
    boxSizing: 'border-box',
    backgroundColor: '$gray900',
    border: '2px solid $gray900',
    '&:focus': {
        outline: 'none',
        borderColor: '$ignite300',
    },
    '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
    },
    '&:placeholder': {
        color: '$gray400',
    },
});
