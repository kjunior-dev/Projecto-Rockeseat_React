import { styled } from './styles';
import * as React from "react";
const Button = styled('button', {
    fontFamily: '$default',
    backgroundColor: '$ignite500',
    borderRadius: '$md'
});
export function App() {
    return (React.createElement(Button, null, "Hello Word"));
}
