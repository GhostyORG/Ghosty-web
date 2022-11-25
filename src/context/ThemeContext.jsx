import { createContext, useEffect, useReducer } from "react";
import { ACTIONS } from "./actions/Theme";

export const ThemeContext = createContext();

const themeReducer = (state, action) => { 
    switch(action.type){
        case ACTIONS.DARKMODE:
            return{...state, darkmode: true}
        case ACTIONS.LIGHTMODE:
            return{...state, darkmode: false}
        default: return state
    }
 }

export const ThemeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(themeReducer, {
		darkmode: false
	});

      // Automatic switch mode based on OS them
    useEffect(() => {
        const doesMachTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        dispatch({type: doesMachTheme ? ACTIONS.DARKMODE : ACTIONS.LIGHTMODE})
          
      }, [dispatch]);

    return<ThemeContext.Provider value={{...state, dispatch}}>{children}</ThemeContext.Provider>
}