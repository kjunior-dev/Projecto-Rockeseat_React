import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Label, MultiStepContainer, Steps, Step } from "./styles";
export function MultiStep({ size, currentStep = 1 }) {
    return (_jsxs(MultiStepContainer, { className: "grid grid-cols-4 gap-1", children: [_jsxs(Label, { children: ["Passo ", currentStep, " de ", size] }), _jsx(Steps, { css: { '--steps-size': size }, children: Array.from({ length: size }, (_, i) => i + 1).map((step) => {
                    return _jsx(Step, { active: currentStep >= step }, step);
                }) })] }));
}
