import styles from './Menu.module.css';
import classnames from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

export const Menu = (): JSX.Element => {
    const { menu, firstCategory, setMenu } = useContext(AppContext);

    return (
        <div>
            {
                !!menu.length && menu.map((item) => {
                    return <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
                })
            }
        </div>
    );
};