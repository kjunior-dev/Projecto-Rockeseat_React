import React from "react";
import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";
import { User } from "phosphor-react";
export function Avatar(props) {
    return (React.createElement(AvatarContainer, null,
        React.createElement(AvatarImage, Object.assign({}, props)),
        React.createElement(AvatarFallback, { delayMs: 600 },
            React.createElement(User, null))));
}
