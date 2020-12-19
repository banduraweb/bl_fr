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

const Theme = ({children}: Props) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
