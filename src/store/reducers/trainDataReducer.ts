import { ITrainDataReducerState, IAction } from '../../types';

const intitialState: ITrainDataReducerState = {
    data: [],
    error: '',
    currentCharacteristics:[],
    currentTrain: '',
    isAllValidate: true
};

export const trainDataReducer = (state = intitialState , action:IAction) => {
    switch(action.type){
    case 'GETDATA':
        return {...state , data: action.payload};
    case 'GETERROR':
        return {...state , error: action.payload};
    case 'PICKCHARACTERISTICS':
        return {...state,
            currentCharacteristics: action.payload.charachteristics,
            currentTrain: action.payload.train
        };
    case 'CHANGEVALUE':
        const newCurrentCharacteristics = state.currentCharacteristics.map((values, index) => {
            return index === action.payload.id ? action.payload.values : values;
        });
        return {...state , currentCharacteristics: newCurrentCharacteristics};
    case 'CHANGEVALIDATEVALUE':
        return {...state , isAllValidate: action.payload};
    default: return state;
    }
};
