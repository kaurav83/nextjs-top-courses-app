import React, { useState } from 'react';
import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import CloseReviewForm from './closeReviewForm.svg';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import axios from 'axios';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [errorState, setErrorState] = useState<string>();

    const onSubmit = async (formData: IReviewForm) => {
        const apiSubmit = process.env.NEXT_PUBLIC_DOMAIN + '/api/review/create-demo';

        try {
            const { data } = await axios.post<IReviewSentResponse>(apiSubmit, {
                ...formData, productId
            });

            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setErrorState('Что то пошло не так');
            }

        } catch (e) {
            setErrorState(e.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div
                className={`${styles.reviewForm} ${className}`}
                {...props}
            >
                <Input
                    {...register('name', { required: { value: true, message: 'Заполните имя' } })}
                    placeholder="Имя"
                    error={errors.name}
                />
                <Input
                    {...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
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

                        rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
                    />
                </div>
                <Textarea
                    {...register('description', { required: { value: true, message: 'Добавьте описание' } })}
                    className={styles.descriptionField}
                    placeholder="Текст отзыва"
                    error={errors.description}
                />
                <div className={styles.submit}>
                    <Button tag="button" appearance="primary">Отправить</Button>
                    <span className={styles.text}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            {
                isSuccess
                &&
                <div className={styles.success}>
                    <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                    <div>
                        Спасибо, ваш отзыв будет опубликован после проверки.
                    </div>
                    <CloseReviewForm 
                        className={styles.closeIcon} 
                        onClick={() => setIsSuccess(false)}
                    />
                </div>
            }
            {
                errorState
                &&
                <div className={styles.error}>
                    Что то пошло не так, попробуйте обновить страницу
                    <CloseReviewForm 
                        className={styles.closeIcon} 
                        onClick={() => setErrorState(undefined)}
                    />
                </div>
            }
        </form>
    );
};

