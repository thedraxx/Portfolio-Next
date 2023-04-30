import { ChangeLanState } from './';

type ChangeLanActionType = 
  | {type: '[ChangeLan] - IsLanguageActive'}

export const changeLanReducer = (state:ChangeLanState, action:ChangeLanActionType): ChangeLanState => {
    switch (action.type) {
        case '[ChangeLan] - IsLanguageActive':

           return {
                ...state,
                IsLanguageActive: !state.IsLanguageActive
            }

        default:
            return state;
    }
}