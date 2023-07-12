import { useEffect } from 'react';
import { TrainsDataType } from './types';
import './App.css';
import { useDispatch } from 'react-redux';
import { UseTypedSelector } from './hooks/useTypedSelector';
import { getData } from './api/getData';
import { trainsDdataUrl } from './constants/url';

import  TrainsInfoTable  from './components/TrainsInfoTable';
import { TrainCharacteristicsTable} from './components/TrainCharacteristicsTable';
import {ErrorMessage} from './components/ErrorMessage';

export const App = () => {
    const trainData = UseTypedSelector(store => store.trainData.data);
    const error = UseTypedSelector(store => store.trainData.error);
    const currentCharacteristics = UseTypedSelector(store => store.trainData.currentCharacteristics);
    const isAllValidate = UseTypedSelector(store => store.trainData.isAllValidate);
    const currentTrain = UseTypedSelector(store => store.trainData.currentTrain);
    const dispatch = useDispatch();

    useEffect(()=> {
        const fetchResult =  async () => await getData<TrainsDataType>(trainsDdataUrl)
            .then((result) => {
                if(Array.isArray(result)){
                    dispatch({type: 'GETDATA' , payload: result});
                } else{
                    dispatch({type: 'GETERROR', payload: result});
                }
            });
        fetchResult();
    },[]);


    useEffect(()=>{
        if(currentCharacteristics.length){
            let isValidate = true;
            let index = 0;
            while(isValidate && index < currentCharacteristics.length){
                const {engineAmperage,force,speed} = currentCharacteristics[index];
                if(engineAmperage.notValidate || force.notValidate || speed.notValidate){
                    isValidate = false;
                    dispatch({type:'CHANGEVALIDATEVALUE' , payload: false});
                }
                index++;
            }

            if(isValidate){
                dispatch({type:'CHANGEVALIDATEVALUE' , payload: true});
            }
        }
    },[currentCharacteristics]);


    return (
        <div className="App">
            {
                error
                    ?
                    <ErrorMessage />
                    :
                    <TrainsInfoTable  trainsInfo={trainData}/>
            }
            {
                currentCharacteristics.length
                    ?
                    <TrainCharacteristicsTable
                        train={currentTrain}
                        isAllValidate={isAllValidate}
                        trainCharacteristicsList={currentCharacteristics}
                    />
                    :
                    null
            }
        </div>
    );
};
