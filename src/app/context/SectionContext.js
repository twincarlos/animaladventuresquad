"use client";
import { createContext, useState, useContext } from 'react';

const SectionContext = createContext();

const SectionProvider = ({ children }) => {
    const [section, setSection] = useState("");

    return (
        <SectionContext.Provider value={{ section, setSection }}>
            {children}
        </SectionContext.Provider>
    );
};

export default SectionProvider;
export const useSection = () => useContext(SectionContext);