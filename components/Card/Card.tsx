import { CardProps } from './Card.props';
import styles from './Card.module.css';
import React from 'react';

export const Card = ({ children, color, className, ...props }: CardProps): JSX.Element => {

    return (
        <div 
            className={
                `${styles.card} ${className} ${color === 'blue' && styles.blue}`
            }
            {...props}
        >
            {children}
        </div>
    );
};

 