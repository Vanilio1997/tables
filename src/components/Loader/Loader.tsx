import s from './Loader.module.css';

export const Loader = () => {
    return (
        <tr className={s.container}>
            <td className={s.loader}/>
        </tr>
    );
};
