import { createContext, use, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
    const [theme,setTheme] = useState('dark');
    const handleToggleTheme=()=>{
        return setTheme((prevTheme) => (prevTheme === 'dark'? 'light' : 'dark'))
    }
    return(
        <ThemeContext.Provider value={{theme ,handleToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}


//creating components

export const DarkLight = () => {
    const {theme,handleToggleTheme} = use(ThemeContext);
  return (
    <div className={`p-4 flex flex-col justify-center items-center h-lvh ${theme === "dark" ? 'bg-slate-900 text-white' : 'bg-white'}`}>
      <h1 className={`text-4xl p-4`}>Dark light Mode Website</h1>
      <p className={`text-2xl p-4`}>Hello !! My React v19 Fans✌</p>
      <button onClick={handleToggleTheme} className={`text-1xl px-8 py-4 ${theme === "dark" ? 'bg-slate-100 text-slate-900 ' : 'bg-slate-900 text-slate-100'}  rounded-2xl`}>{theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}</button>
    </div>
  )
}

