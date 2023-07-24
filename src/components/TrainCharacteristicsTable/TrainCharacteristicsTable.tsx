import s from './TrainCharacteristicsTable.module.css';
import React from 'react';
import TrainCharacterisctics from './TrainCharacterisctics';
import { TrainCharacteristics } from '../../types';

interface ITrainCharacteristicsTableProps{
    trainCharacteristicsList: TrainCharacteristics[];
    isAllValidate: boolean;
    train: string
}
const TrainCharacteristicsTable = ({
    trainCharacteristicsList,
    isAllValidate,
    train}:ITrainCharacteristicsTableProps) => {

    // console.log(trainCharacteristicsList[0].speed.value , trainCharacteristicsList[1].speed.value);

    function getSortSpeedValueInConsole(){
        const sortValue = trainCharacteristicsList
            .map(info => info.speed.value)
            .sort((a,b) => a-b);
            console.log(sortValue);

        console.log(sortValue);
    }
    return (
        <div className={s.container}>
            <table className={s.table}>
                <caption>{train}</caption>
                <thead>
                    <tr>
                        <th>Ток двигателя</th>
                        <th>Сила тяги</th>
                        <th>Скорость</th>
                    </tr>
                </thead>
                <tbody>
                    {trainCharacteristicsList.map((train, index) => (
                        <TrainCharacterisctics key={index} trainCharacterisctics={train} id={index} />
                    ))}
                </tbody>
            </table>
            <button
                onClick={getSortSpeedValueInConsole}
                className={s.btn}
                disabled={!isAllValidate}>Отправить данные</button>
        </div>

    );
};

export default React.memo(TrainCharacteristicsTable);
