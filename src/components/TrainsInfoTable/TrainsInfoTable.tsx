import React from 'react';
import { useDispatch } from 'react-redux';
import s from './TrainsInfoTable.module.css';
import { Loader } from '../Loader';
import { ITrainInfo, ITrainCharacteristics,TrainCharacteristics } from '../../types';

interface ITrainInfoTableProps {
   trainsInfo: ITrainInfo[]
}

const TrainsInfoTable = ({trainsInfo}:ITrainInfoTableProps) => {
    const dispatch = useDispatch();

    function pickTrain(characteristics:ITrainCharacteristics[] , train: string):void{


        const trainCharacheteristicsWithValidate:TrainCharacteristics[] = characteristics.map(values => {
            return {
                engineAmperage: {value:values.engineAmperage} ,
                force:{ value: values.force},
                speed: {value:values.speed}
            };
        });
        dispatch({type:'PICKCHARACTERISTICS' ,
            payload: { charachteristics:trainCharacheteristicsWithValidate ,train}});
    }

    return (
        <div className={s.container}>
            <table className={s.table}>
                <caption>Поезда</caption>
                <tr>
                    <th>Название</th>
                    <th>Описание</th>
                </tr>
                {
                    trainsInfo.length
                        ?
                        trainsInfo.map(train => (
                            <tr onClick={() => pickTrain(train.characteristics , train.name)}>
                                <td>{train.name}</td>
                                <td>{train.description}</td>
                            </tr>
                        ))
                        :
                        <Loader />
                }
            </table>

        </div>
    );
};

export default React.memo(TrainsInfoTable);
