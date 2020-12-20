import React, {ReactNode} from "react";

import {ThemeProvider} from "styled-components";
import {DefaultTheme} from 'styled-components';

const theme: DefaultTheme = {
    spacing: (args: number[]): string=>{
       return args.map(el=>`${el}rem`).join(" ")
    },
    shapes: {
        borderRadius: '4px',
    },
    shadows: [
        "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)"
    ],
    palette: {
        common: {
            black: '#000',
            white: '#fff'
        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#fff'
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
            divider: 'rgba(0, 0, 0, 0.12)'
        },
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
};

type Props = {
    children?: ReactNode
}

const Theme = ({children}: Props):ReactNode => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
