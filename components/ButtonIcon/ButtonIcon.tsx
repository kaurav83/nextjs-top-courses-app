import styles from './ButtonIcon.module.css';
import { ButtonIconProps, icons } from './ButtonIcon.props';
import ArrowIcon from './arrow-button.svg';
import classnames from 'classnames';

export const ButtonIcon = ({ appearance, icon, className, ...props }: ButtonIconProps): JSX.Element => {
    const IconComp = icons[icon];
    return (
        <button
            className={
                `${styles.buttonIcon} ${className} ${appearance === 'primary' ? `${styles.primary}` : `${styles.white}`}`
            }

            {...props}
        >
            <IconComp />
        </button>
    );
};