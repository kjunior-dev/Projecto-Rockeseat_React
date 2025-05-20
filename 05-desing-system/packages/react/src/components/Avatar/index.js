import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";
import { User } from "phosphor-react";
export function Avatar(props) {
    return (_jsxs(AvatarContainer, { children: [_jsx(AvatarImage, Object.assign({}, props)), _jsx(AvatarFallback, { delayMs: 600, children: _jsx(User, {}) })] }));
}
