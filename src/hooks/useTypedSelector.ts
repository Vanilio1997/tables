import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { IStore } from 'types';

export const UseTypedSelector : TypedUseSelectorHook<IStore> = useSelector;
