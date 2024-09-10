'use client'
import { createContext, useState, useEffect } from 'react';

const key = 'LANG';
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('ID');
    useEffect(() => {
        const savedLanguage = localStorage.getItem(key);
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    const changeLanguage = (val) => {
        setLanguage(val);
        localStorage.setItem(key, val);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
  );
};

export default LanguageContext;