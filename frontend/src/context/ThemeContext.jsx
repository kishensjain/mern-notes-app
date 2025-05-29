import { createContext, useEffect, useState, useContext } from "react"


const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{
  const [theme, setTheme] = useState("light");
  useEffect(()=>{
    document.documentElement.classList.toggle("dark", theme === "dark")
  },[theme])
  const toggleTheme = () =>{
    setTheme((prev)=>(prev === "light" ? "dark" : "light"))
  }
  return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

//Create a custom hook for using the theme context
//This is a shortcut so other components can just call useTheme() instead of writing useContext(ThemeContext) every time.
export const useTheme = () => useContext(ThemeContext);