import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import classnames from 'classnames';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
    return (
        <div {...props}>
            Footer
        </div>
    );
};