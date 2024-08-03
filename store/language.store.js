import {create} from 'zustand';

export const useLanguageStore = create((set) => ({
    language: "ID",
    setLanguage: (languageInput) => set((state) => ({ language: languageInput })),
}));