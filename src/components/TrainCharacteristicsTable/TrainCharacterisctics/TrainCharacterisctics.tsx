import React,{useState, useEffect} from 'react';
import { TrainCharacteristics,characteristicsNames } from '../../../types';
import { useDispatch } from 'react-redux';
import s from './TrainCharacterisctics.module.css';

interface ITrainCharacteristicProps{
   trainCharacterisctics: TrainCharacteristics;
   id: number;
}

const TrainCharacterisctics = ({trainCharacterisctics,id}:ITrainCharacteristicProps) => {
    const [values ,setValues] = useState<TrainCharacteristics>(trainCharacterisctics);
    const dispatch = useDispatch();
console.log(values);


    function changeValue(value:string, category:characteristicsNames){
        if(/^-?(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/.test(value)){
            const valueAsNumber = +value;
            const newValue = {...values , [category]: {value:valueAsNumber}};
            if(category === 'force' && (valueAsNumber < 0 || Number.isInteger(valueAsNumber))){
                newValue[category].notValidate = true;
            } else if((category === 'engineAmperage' || category === 'speed') &&
                    (valueAsNumber < 0 || !Number.isInteger(valueAsNumber))){
                newValue[category].notValidate = true;
            };
            setValues(newValue);
            console.log(newValue);
            dispatch({type:'CHANGEVALUE' , payload: {id , values: newValue}});
        };
    };

    function addNewValue(){
        dispatch({type:'ADDVALUE' , payload:{
            values:{engineAmperage:{value: 1} ,force: {value: 1}, speed: {value: 1}} ,
            id
        }});
    }
    useEffect(()=>{
        setValues(trainCharacterisctics);
    },[trainCharacterisctics]);

    return (
        <tr>
            <td  className={values.engineAmperage.notValidate ?  s.red : ''}>
                <input
                    className={s.input}
                    value={values.engineAmperage.value}
                    onChange={(e) => changeValue(e.target.value , 'engineAmperage')}
                />
            </td>
            <td  className={values.force.notValidate ?  s.red : ''}>
                <input
                    className={s.input}
                    value={values.force.value}
                    onChange={(e) => changeValue(e.target.value , 'force')}
                />
            </td>
            <td className={values.speed.notValidate ? s.red : ''}>
                <input
                    className={s.input}
                    value={values.speed.value}
                    onChange={(e) => changeValue(e.target.value, 'speed')}
                />
            </td>
            <td>
                <button onClick={addNewValue}>+</button>
            </td>
        </tr>
    );
};

export default React.memo(TrainCharacterisctics);
