import s from './TrainCharacteristicsTable.module.css';
import TrainCharacterisctics from './TrainCharacterisctics';
import { TrainCharacteristics } from '../../types';

interface ITrainCharacteristicsTableProps{
    trainCharacteristicsList: TrainCharacteristics[];
    isAllValidate: boolean;
    train: string
}
export const TrainCharacteristicsTable = ({
    trainCharacteristicsList,
    isAllValidate,
    train}:ITrainCharacteristicsTableProps) => {

    function getSortSpeedValueInConsole(){
        const sortValue = trainCharacteristicsList
            .map(info => info.speed.value)
            .sort((a,b) => a-b);
        console.log(sortValue);
    }
    return (
        <div className={s.container}>
            <table className={s.table}>
                <caption>{train}</caption>
                <tr>
                    <th>Ток двигателя</th>
                    <th>Сила тяги</th>
                    <th>Скорость</th>
                </tr>
                {trainCharacteristicsList.map((train, index) => (
                    <TrainCharacterisctics key={index} trainCharacterisctics={train} id={index} />
                ))}
            </table>
            <button
                onClick={getSortSpeedValueInConsole}
                className={s.btn}
                disabled={!isAllValidate}>Отправить данные</button>
        </div>

    );
};
