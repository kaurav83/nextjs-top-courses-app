import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import classnames from 'classnames';
import React, { useState, Fragment, useRef, forwardRef, ForwardedRef } from 'react';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { declOfNum, priceRu } from '../../helpers/helpers';
import Image from 'next/image';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { motion } from 'framer-motion';

export const Product = motion(forwardRef(
    ({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
        const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
        const reviewRef = useRef<HTMLDivElement>(null);

        const srollToReview = () => {
            setIsReviewOpened(true);
            reviewRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        };

        return (
            <div className={className} {...props} ref={ref}>
                <Card className={`${styles.product}`}>
                    <div className={styles.logo}>
                        <Image
                            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                            alt={product.title}
                            width={70}
                            height={70}
                        />
                    </div>
                    <div className={styles.title}>
                        {product.title}
                    </div>
                    <div className={styles.priceRu}>
                        {priceRu(product.price)}
                        {product.oldPrice && <Tag size="s" className={styles.oldPrice} color="green">{priceRu(product.price - product.oldPrice)}</Tag>}
                    </div>
                    <div className={styles.credit}>
                        {priceRu(product.credit)}/<span className={styles.month}>мес</span>
                    </div>
                    <div className={styles.rating}>
                        <Rating rating={product.reviewAvg ?? product.initialRating} />
                    </div>
                    <div className={styles.tags}>
                        {
                            product.categories.map((categoryItem: string) => {
                                return (
                                    <Tag
                                        key={categoryItem} size="m"
                                        color="ghost"
                                        className={styles.category}
                                    >
                                        {categoryItem}
                                    </Tag>
                                );
                            })
                        }
                    </div>
                    <div className={styles.priceTitle}>
                        Цена
                    </div>
                    <div className={styles.creditTitle}>
                        Кредит
                    </div>
                    <div className={styles.rateTitle}>
                        <a href="#ref" onClick={srollToReview}>
                            {product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
                        </a>
                    </div>
                    <div className={styles.hr}><hr className={styles.hr} /></div>
                    <div className={styles.description}>
                        {product.description}
                    </div>
                    <div className={styles.feature}>
                        {product.characteristics.map(c => (
                            <div className={styles.characteristics} key={c.name}>
                                <span className={styles.characteristicName}>{c.name}</span>
                                <span className={styles.characteristicDots} />
                                <span className={styles.characteristicValue}>{c.value}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.advBlock}>

                        {
                            product.advantages
                            &&
                            <div className={styles.advantages}>
                                <div>Преимущества</div>
                                {product.advantages}
                            </div>
                        }
                        {
                            product.disadvantages
                            &&
                            <div className={styles.disadvantages}>
                                <div>Недостатки</div>
                                {product.disadvantages}
                            </div>
                        }
                    </div>
                    <div className={`${styles.hr} ${styles.hr2}`}><hr /></div>
                    <div className={styles.actions}>
                        <Button tag="button" appearance="primary">Узнать подробнее</Button>
                        <Button
                            tag="button"
                            appearance="ghost"
                            arrow={!isReviewOpened ? 'right' : 'down'}
                            className={styles.reviewBtn}
                            onClick={() => setIsReviewOpened(!isReviewOpened)}
                        >Читать отзывы</Button>
                    </div>
                </Card>
                <Card
                    color="blue"
                    className={
                        isReviewOpened ?
                            `${styles.reviews} ${styles.opened}`
                            :
                            `${styles.reviews} ${styles.closed}`
                    }
                    ref={reviewRef}
                >
                    {
                        product.reviews.map(review => {

                            return (
                                <Fragment key={review._id}>
                                    <Review review={review} />
                                    <hr />
                                </Fragment>
                            );
                        })
                    }
                    <ReviewForm productId={product._id} />
                </Card>
            </div>
        );
    }
));