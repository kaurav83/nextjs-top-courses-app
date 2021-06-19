import { HhDataElementProps } from './HhDataElement.props';
import styles from './HhDataElement.module.css';
import React from 'react';
import { Card } from '../Card/Card';
import RoundStarIcon from './roundStarIcon.svg';
import { priceRu } from '../../helpers/helpers';

export const HhDataElement = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataElementProps): JSX.Element => {

    return (
        <div className={styles.hh}>
            <Card className={styles.hhCount}>
                <div className={styles.hhStatTitle}>Всего вакансий</div>
                <div className={styles.hhStatCount}>{count}</div>
            </Card>
            <Card className={styles.salary}>
                <div>
                    <div className={styles.hhStatTitle}>Начальный</div>
                    <div className={styles.salaryValue}>{priceRu(Math.floor(juniorSalary * 0.37))}</div>
                    <div className={styles.rate}>
                        <RoundStarIcon className={styles.filled} />
                        <RoundStarIcon />
                        <RoundStarIcon />
                    </div>
                </div>

                <div>
                    <div className={styles.hhStatTitle}>Средний</div>
                    <div className={styles.salaryValue}>{priceRu(Math.floor(middleSalary * 0.37))}</div>
                    <div className={styles.rate}>
                        <RoundStarIcon className={styles.filled} />
                        <RoundStarIcon className={styles.filled} />
                        <RoundStarIcon />
                    </div>
                </div>

                <div>
                    <div className={styles.hhStatTitle}>Профессионал</div>
                    <div className={styles.salaryValue}>{priceRu(Math.floor(seniorSalary * 0.37))}</div>
                    <div className={styles.rate}>
                        <RoundStarIcon className={styles.filled} />
                        <RoundStarIcon className={styles.filled} />
                        <RoundStarIcon className={styles.filled} />
                    </div>
                </div>
            </Card>
        </div>
    );
};

