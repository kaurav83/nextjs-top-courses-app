import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import classnames from 'classnames';
import { Menu } from '../Menu/Menu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../logo.svg';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    const router = useRouter();
    
    const handleSearch = () => {
        router.replace('/courses');
    };

    return (
        <div {...props} className={classnames(className, styles.sidebar)}>
            <Logo className={styles.logo} />
            <div onClick={() => handleSearch()}>Search</div>
            <Menu />
        </div>
    );
};