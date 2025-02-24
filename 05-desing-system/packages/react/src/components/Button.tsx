import {styled} from "../styles/index";
import {ComponentProps} from "@stitches/react";
import ElementType = React.JSX.ElementType;

export const Button = styled('button', {
   /* all: 'unset',
    borderRadius: '$sm',
    fontSize: '$sm',
    fontWeight: '$medium',
    fontFamily: '$default',
    textAlign: 'center',
    minWidth: 120,
    boxSizing: 'border-box',
    padding: '0 $4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',
    cursor: 'pointer',

    svg: {
        width: '$4',
        height: '$4',
    },

    variants: {
        variant: {
            primary: {
                color: '$white',
                background: '$ignite500',
            }
        }
    },

    defaultVariants: {
        variant: 'primary'
    }*/
})

export interface ButtonProps extends ComponentProps<typeof Button>{
    as ?: ElementType
}
