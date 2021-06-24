import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import React from 'react';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import CloseReviewForm from './closeReviewForm.svg';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm } from './ReviewForm.interface';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit, formState: { errors } } = useForm<IReviewForm>();

    const onSubmit = (data: IReviewForm) => {
        console.log(data, 'DATA')
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div
                className={`${styles.reviewForm} ${className}`}
                {...props}
            >
                <Input
                    {...register('name', { required: {value: true, message: 'Заполните имя'} })}
                    placeholder="Имя"
                    error={errors.name}
                />
                <Input
                    {...register('title', { required: {value: true, message: 'Заполните заголовок'} })}
                    className={styles.titleField}
                    placeholder="Заголовок отзыва"
                    error={errors.title}
                />
                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Controller
                        control={control}
                        name="rating"
                        render={
                            ({ field }) => {
                                return (
                                    <Rating
                                        isEditable
                                        rating={field.value}
                                        setRating={field.onChange}
                                        ref={field.ref}
                                        error={errors.rating}
                                    />
                                );
                            }
                        }
                        rules={{ required: {value: true, message: 'Укажите рейтинг'} }}
                    />
                </div>
                <Textarea
                    {...register('description', { required: {value: true, message: 'Добавьте описание'} })}
                    className={styles.descriptionField}
                    placeholder="Текст отзыва"
                    error={errors.description}
                />
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
        </form>
    );
};

