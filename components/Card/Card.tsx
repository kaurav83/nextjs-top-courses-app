import { CardProps } from './Card.props';
import styles from './Card.module.css';
import React, { forwardRef, ForwardedRef } from 'react';

export const Card = forwardRef(
    ({ children, color, className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

        return (
            <div
                className={
                    `${styles.card} ${className} ${color === 'blue' && styles.blue}`
                }
                {...props}
                ref={ref}
            >
                {children}
            </div>
        );
    }
);

