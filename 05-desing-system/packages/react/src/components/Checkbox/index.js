import { jsx as _jsx } from "react/jsx-runtime";
import { CheckboxContainer, CheckboxIndicatior } from "./style";
import { Check } from "phosphor-react";
export function Checkbox(props) {
    return (_jsx(CheckboxContainer, Object.assign({}, props, { children: _jsx(CheckboxIndicatior, { asChild: true, children: _jsx(Check, { weight: 'bold' }) }) })));
}
