import { InputProps } from './Input.props';
import styles from './Input.module.css';
import React, { forwardRef, ForwardedRef } from 'react';

export const Input = forwardRef(
    ({ error, className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

        return (
            <div className={`${styles.fieldBlock} ${className}`}>
                <input
                    className={
                        error ?
                            `${styles.input} ${styles.error}`
                            :
                            `${styles.input}`
                    }
                    {...props}
                    ref={ref}
                />
                {error && <span className={styles.errorMessage}>{error.message}</span>}
            </div>
        );
    }
);