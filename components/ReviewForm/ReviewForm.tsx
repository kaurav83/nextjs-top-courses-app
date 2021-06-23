import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import React from 'react';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import CloseReviewForm from './closeReviewForm.svg';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
    return (
        <>
        <div 
            className={`${styles.reviewForm} ${className}`}
            {...props}
        >
            <Input placeholder="Имя" />
            <Input className={styles.titleField} placeholder="Заголовок отзыва" />
            <div className={styles.rating}>
                <span>Оценка:</span>
                <Rating rating={0} />
            </div>
            <Textarea className={styles.descriptionField} placeholder="Текст отзыва" />
            <div className={styles.submit}>
                <Button tag="button" appearance="primary">Отправить</Button>
                <span className={styles.text}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
            </div>
        </div>
        <div className={styles.success}>
            <div className={styles.successTitle}>Ваш отзыв отправлен</div>
            <div>
                Спасибо, ваш отзыв будет опубликован после проверки.
            </div>
            <CloseReviewForm className={styles.closeIcon} />
        </div>
        </>
    );
};

 