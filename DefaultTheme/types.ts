import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        spacing: (args: number[])=>{},
        shapes: {
            borderRadius: string,
        },
        palette: {
            common: {
                black: string,
                white: string
            },
            error: {
                light: string,
                main: string,
                dark: string,
                contrastText: string
            },
            text: {
                primary: string,
                secondary: string,
                disabled: string,
                hint: string,
                divider: string
            },
            primary: {
                light: string,
                main: string,
                dark: string,
                contrastText: string,
            },
            secondary: {
                light: string,
                main: string,
                dark: string,
                contrastText: string,
            },
        },
        fonts: string[],
        fontSizes: {
            small: string,
            medium: string,
            large: string
        }
    }
}
