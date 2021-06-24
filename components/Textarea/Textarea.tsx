import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';
import React, { forwardRef, ForwardedRef } from 'react';


export const Textarea = forwardRef(
    ({ error, className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {

        return (
            <div className={`${styles.fieldBlock} ${className}`}>
                <textarea
                    className={
                        error ?
                            `${styles.textarea} ${styles.error}`
                            :
                            `${styles.textarea}`
                    }
                    {...props}
                    ref={ref}
                />
                {error && <span className={styles.errorMessage}>{error.message}</span>}
            </div>
        );
    }
);