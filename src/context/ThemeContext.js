import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ( props ) => {
    const [ isLightTheme, setLightTheme ] = useState( true )
    const themes = { dark: {
            body: '#354444',
            bg: '#6b9494',
            ui: '#486464', /*'#a5c1ad',*/
            text: '#fff', 
            input: '#a6bfbf',
            inputText: 'black',
            submit: '#fff',
        },
        light: {
            body: '#d1dde7',
            bg: '#f1f1f0',
            ui: '#a4cdda', /*'#80b8cb', /*'#62a8bf',*/
            text: '#000', 
            input: '#c9e1e9',
            inputText: '#000',
            submit: '#62a8bf',
        }
    }
    const toogleLightTheme = () => setLightTheme( !isLightTheme )
    return (
        <ThemeContext.Provider value={ { isLightTheme, toogleLightTheme, themes }} >
            { props.children }
        </ThemeContext.Provider >
    )
}

export default ThemeContextProvider
