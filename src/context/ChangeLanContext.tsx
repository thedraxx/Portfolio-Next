import { createContext } from 'react';

export interface ChangeLanContextContextProps{
    IsLanguageActive: boolean;

    // Funciones
    ChangeLanguage: () => void;
}

export const ChangeLanContext = createContext({} as ChangeLanContextContextProps);