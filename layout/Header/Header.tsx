import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import classnames from 'classnames';
import Logo from '../logo.svg';
import React, { useState, useEffect } from 'react';
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';
import { motion } from 'framer-motion';
import { Sidebar } from '../Sidebar/Sidebar';
import { useRouter } from 'next/router';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const router = useRouter();

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20
            }
        },
        closed: {
            opacity: 0,
            x: '100%'
        }
    };

    useEffect(() => {
        setIsOpened(false);
    }, [router]);

    const handleOpenMenu = () => {
        setIsOpened(true);
    };

    const handleCloseMenu = () => {
        setIsOpened(false);
    };
    
    return (
        <header className={`${styles.header} ${className}`} {...props}>
            <Logo className={styles.logoHeader} />
            <ButtonIcon 
                icon="OpenIcon" 
                appearance="white" 
                onClick={handleOpenMenu}
            />
            <motion.div 
                className={styles.mobileMenu}
                variants={variants}
                initial={'closed'}
                animate={isOpened ? 'opened' : 'closed'}
            >
                <Sidebar />
                <ButtonIcon 
                    appearance="white" 
                    icon="CloseIcon" 
                    className={styles.menuClose}
                    onClick={handleCloseMenu}
                />
            </motion.div>
        </header>
    );
};