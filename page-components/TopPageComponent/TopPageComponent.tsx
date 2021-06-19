import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './Paragraph.module.css';

export const TopPageComponent = ({ page, products, firstCategory, ...props }: TopPageComponentProps): JSX.Element => {

    return (
        <>
            {!!products && products.length}
        </>
    );
};

 