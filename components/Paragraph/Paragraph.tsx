import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';

export const Paragraph = ({ size, children, ...props }: ParagraphProps): JSX.Element => {

    switch (size) {
        case 's':
            return <p className={`${styles.s} ${styles.p}`} {...props}>{children}</p>;
        case 'm':
            return <p className={`${styles.m} ${styles.p}`} {...props}>{children}</p>;
        case 'l':
            return <p className={`${styles.l} ${styles.p}`} {...props}>{children}</p>;
        case 'xl':
            return <p className={`${styles.xl} ${styles.p}`} {...props}>{children}</p>;
        default:
            return <p className={`${styles.l} ${styles.p}`} {...props}>{children}</p>;
    }
};

 