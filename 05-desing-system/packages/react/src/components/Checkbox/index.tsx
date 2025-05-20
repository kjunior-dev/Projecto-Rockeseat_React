import {CheckboxContainer, CheckboxIndicatior} from "./style";
import {Check} from "phosphor-react";
import {ComponentProps} from "@stitches/react";

export interface CheckboxProps extends ComponentProps<typeof CheckboxContainer>{}

export function Checkbox(props: CheckboxProps){
    return(
        <CheckboxContainer {...props}>
            <CheckboxIndicatior asChild>
                <Check weight={'bold'}/>
            </CheckboxIndicatior>
        </CheckboxContainer>
    )
}