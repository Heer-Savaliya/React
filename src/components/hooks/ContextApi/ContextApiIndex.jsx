import { createContext, useContext } from "react";

//! Step 1
export const BioContext = createContext();

//! Step 2
export const BioProvider=({children})=>{
    const myName = "Heer Savaliya";
    return <BioContext.Provider value={myName}>{children}</BioContext.Provider>
}

//! custom hooks

export const useBioContext =()=>{
    const context = useContext(BioContext);
    return context;
}