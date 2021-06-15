import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow-button.svg';
import classnames from 'classnames';

export const Button = ({ tag, arrow = 'none', appearance, children, className, ...props }: ButtonProps): JSX.Element => {
    switch (tag) {
        case 'button':
            return (
                <button className={classnames(styles.button, className, {
                    [styles.primary]: appearance === 'primary',
                    [styles.ghost]: appearance === 'ghost'
                })}
                    {...props}
                >
                    {children}
                    {arrow !== 'none' && <span className={classnames(styles.arrow, {
                        [styles.down]: arrow === 'down'
                    })}
                    >
                        <ArrowIcon />
                    </span>}
                </button>
            );
        case 'a':
            return (
                <a>
                    {children}
                </a>
            );
        default:
            return (
                <button>
                    {children}
                </button>
            );
    }
};