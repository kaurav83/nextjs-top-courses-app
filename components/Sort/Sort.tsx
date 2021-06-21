import { SortEnum, SortProps } from './Sort.props';
import styles from './Sort.module.css';
import SortIcon from './sort.svg';

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
    
    return (
        <div 
            className={`${styles.sort} ${className}`} 
            {...props}
        >
            <span
                onClick={() => setSort(SortEnum.Rating)}
                className={
                    sort === SortEnum.Rating ? 
                        styles.active 
                        : 
                        ""
                }
            >
                <SortIcon className={styles.sortIcon} />По рейтингу
            </span>
            <span
                onClick={() => setSort(SortEnum.Price)}
                className={
                    sort === SortEnum.Price ? 
                        styles.active
                        : 
                        ""
                }
            >
                <SortIcon  className={styles.sortIcon} />По цене
            </span>
        </div>
    );
};