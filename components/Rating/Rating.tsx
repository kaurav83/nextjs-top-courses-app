import React, {
    useEffect,
    useState,
    KeyboardEvent,
    forwardRef,
    ForwardedRef
} from 'react';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import classnames from 'classnames';
import StarIcon from './star.svg';

export const Rating = forwardRef(
    ({ error, rating, isEditable = false, setRating, ...props }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
        const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
        // const svgIconRef = React.useRef();

        useEffect(() => {
            constructRating(rating);
        }, [rating]);

        const handleChangeDisplay = (index: number) => {
            if (!isEditable) {
                return;
            }

            constructRating(index);
        };

        const handleClickRating = (index: number) => {
            if (!isEditable || !setRating) {
                return;
            }

            // svgIconRef.current.style.outline = 'none';
            setRating(index);
        };

        const handleSpace = (e: KeyboardEvent<SVGAElement>, index: number) => {
            if (e.code !== 'Space' || !setRating) {
                return;
            }

            setRating(index);
        };

        const constructRating = (currentRating: number) => {
            const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
                return (
                    <span
                        className={
                            classnames(styles.star, {
                                [styles.filled]: i < currentRating,
                                [styles.editable]: !!isEditable
                            })
                        }
                        onMouseEnter={() => handleChangeDisplay(i + 1)}
                        onMouseLeave={() => handleChangeDisplay(rating)}
                        onClick={() => handleClickRating(i + 1)}
                    >
                        <StarIcon
                            tabIndex={isEditable ? 0 : -1}
                            onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(e, i + 1)}
                        // ref={svgIconRef}
                        />
                    </span>
                );
            });

            setRatingArray(updatedArray);
        };

        return (
            <div
                {...props}
                ref={ref}
                className={
                    error ?
                    `${styles.ratingWrapper} ${styles.errorBlock}`
                    :
                    styles.ratingWrapper
                }
            >
                {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
                {error && <span className={styles.errorMessage}>{error.message}</span>}
            </div>
        );
    }
);
