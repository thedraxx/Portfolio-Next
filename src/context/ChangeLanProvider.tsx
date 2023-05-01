import { useReducer } from 'react';
import { ChangeLanContext,changeLanReducer } from './';

export interface ChangeLanState {
    IsLanguageActive: boolean;
}

const ChangeLan_INITIAL_STATE: ChangeLanState = {
    IsLanguageActive: false,
};

interface Props {
children: React.ReactNode;
}

export const ChangeLanProvider = ({ children }:Props) => {

    const [state, dispatch] = useReducer(changeLanReducer, ChangeLan_INITIAL_STATE)

    const ChangeLanguage = () => {
        dispatch({
            type: "[ChangeLan] - IsLanguageActive" })  
    }   

   return (
        <ChangeLanContext.Provider value={{
           ...state
              ,ChangeLanguage   
        }}>
            {children}
        </ChangeLanContext.Provider>
  )
}