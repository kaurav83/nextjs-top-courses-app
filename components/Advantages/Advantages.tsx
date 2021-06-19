import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import CheckedIcon from './checkedIcon.svg';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
    return (
        <>
           {
               advantages.map(advantage => {
                   return (
                        <div 
                            key={advantage._id}
                            className={styles.advantage}
                        >
                            <CheckedIcon />
                            <div className={styles.title}>{advantage.title}</div>
                            <hr className={styles.vline} />
                            <div className={styles.description}>{advantage.description}</div>
                        </div>
                   );
               })
           } 
        </>
    );
};