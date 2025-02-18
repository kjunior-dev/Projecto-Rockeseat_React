import {styled} from "../styles/index";
import {ComponentProps} from "@stitches/react";
import ElementType = React.JSX.ElementType;

export const Button = styled('button', {

})

export interface ButtonProps extends ComponentProps<typeof Button>{
    as ?: ElementType
}