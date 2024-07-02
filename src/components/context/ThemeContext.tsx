

import { createContext } from "react";
import { themeAwesome } from "./theme";

type ThemeContextProviderProps = {
    children: React.ReactNode
}


export const ThemeContext = createContext(themeAwesome);

export const ThemeContextProvider = ({children}: ThemeContextProviderProps ) => {

    return <ThemeContext.Provider value={themeAwesome}> {children} </ThemeContext.Provider>
}