import { createStore} from 'redux';
import {combineReducers} from 'redux';
import { trainDataReducer } from './reducers/trainDataReducer';

const rootReducer = combineReducers({
    trainData : trainDataReducer
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
