/*importamos o styled-components para poder passar novo tipagem. porque se nao importamos ele
recebe como novo como se stamos recriado novo modulo do styled-components*/
import 'styled-components';
import { defaultTheme } from "../styles/themes/default.ts"; // O defaultTheme contem todas as cores usadas no projeto

type ThemeType = typeof defaultTheme; // criamos um tipo de nome ThemeType que recebe o defaultTheme

declare module 'styled-components' { // Aqui estamos criando um tipagem para o modulo styled-components do npm.
    export interface DefaultTheme extends ThemeType{}
    /*
      Aqui usamos o DefaultTheme que recebe o ThemeType que recebe o defaultTheme
      O DefaultTheme ja existe dentro do styled-components mais so que é uma interface vazia,
      porque é essa interface que vamos falar quais sao os props dentro do theme
    */
}