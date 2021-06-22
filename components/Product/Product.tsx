import { ProductProps } from './ProductProps.props';
import styles from './Product.module.css';
import classnames from 'classnames';

export const Product = ({ children, ...props}: ProductProps): JSX.Element => {
    return (
        <div>
            Product
        </div>
    );
};