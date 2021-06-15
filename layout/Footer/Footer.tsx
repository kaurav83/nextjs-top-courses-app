import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import classnames from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer {...props} className={classnames(className, styles.footer)}>
            <div className={styles.copyright}>OwlTop © 2020 - {format(new Date, 'yyyy')} Все права защищены</div>
            <a href="#" target="_blanc" className={styles.userContract}>Пользовательское соглашение</a>
            <a href="#" target="_blanc" className={styles.userPolicy}>Политика конфиденциальности</a>
        </footer>
    );
};