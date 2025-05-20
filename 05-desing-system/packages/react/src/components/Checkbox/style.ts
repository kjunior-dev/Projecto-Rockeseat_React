import {styled} from "../../styles/index";
import {Checkbox} from "@radix-ui/react-checkbox";

export const CheckboxContainer = styled(Checkbox.Root, {
    all: 'unset',
    width: '$6',
    height: '$6',
    backgroundColor: '$gray900',
    border: '2px solid $gray900',
    borderRadius: '$xs',
    lineHeight: 0,
    cursor: 'pointer',
    overflow: 'hidden',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:focus': {
        border: '2px solid $ignite300',
    },
    '&[data-state="checked"]': {
        backgroundColor: '$ignite300',
    }
})

export const CheckboxIndicatior = styled(Checkbox.Indicatior, {
    color: '$white',
    height: '$4',
    width: '$4',

})