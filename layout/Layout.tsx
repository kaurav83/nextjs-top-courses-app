import React, { FunctionComponent } from 'react';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import classnames from 'classnames';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';
import { AppContextProvider } from '../context/app.context';

// export 
const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <div className={styles.main}>
                {children}
            </div>
            <Footer className={styles.footer} />
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
    // О типе Record можно почитать по этой ссылке https://scriptdev.ru/ts/044/

    // добавляя & IAppContext к объекту типизации Record мы говорим, что по умолчанию мы хотим,
    // чтобы любая страница через props всегда имела меню и первую категорию, которые хранятся в ContextAPI


    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        );
    };
};