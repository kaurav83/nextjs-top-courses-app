import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import classnames from 'classnames';
import { Menu } from '../Menu/Menu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../logo.svg';
import React from 'react';
import { Search } from '../../components/Search/Search';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    const router = useRouter();

    return (
        <div {...props} className={classnames(className, styles.sidebar)}>
            <Logo className={styles.logo} />
            <Search />
            <Menu />
        </div>
    );
};