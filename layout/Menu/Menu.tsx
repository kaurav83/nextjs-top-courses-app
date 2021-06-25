import React from 'react';
import styles from './Menu.module.css';
import classnames from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../helpers/helpers';
import { motion } from 'framer-motion';

export const Menu = (): JSX.Element => {
    const { menu, firstCategory, setMenu } = useContext(AppContext);
    const router = useRouter();

    const variantsParrent = {
        visible: {
            marginBottom: 20,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: {
            marginBottom: 0
        },
    };

    const variantsChildren = {
        visible: {
            opacity: 1,
            height: 29,
        },
        hidden: {
            opacity: 0,
            height: 0,
        },
    };

    const openSecodLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory === secondCategory) {
                m.isOpened = !m.isOpened;
            }

            return m;
        }));
    };

    const renderFirstLevelMnu = () => {
        return (
            <>
                {
                    firstLevelMenu.map(mnu => (
                        <div key={mnu.route}>
                            <Link href={`/${mnu.route}`}>
                                <a>
                                    <div className={classnames(styles.firstLevel, {
                                        [styles.firstLevelActive]: mnu.id === firstCategory
                                    })}>
                                        {mnu.icon}
                                        <span>{mnu.name}</span>
                                    </div>
                                </a>
                            </Link>
                            {mnu.id === firstCategory && renderSecondLevelMnu(mnu)}
                        </div>
                    ))
                }
            </>
        );
    };
    // console.log(router, 'ROUTER');
    const renderSecondLevelMnu = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => {
                    if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        // console.log(router.asPath.split('/')[2], 'sadfasdf');
                        m.isOpened = true;
                    }

                    return (
                        <div key={m._id.secondCategory}>
                            <div
                                className={styles.secondLevel}
                                onClick={() => openSecodLevel(m._id.secondCategory)}
                            >
                                {m._id.secondCategory}
                            </div>
                            <motion.div
                                layout
                                variants={variantsParrent}
                                initial={m.isOpened ? 'visible' : 'hidden'}
                                animate={m.isOpened ? 'visible' : 'hidden'}
                                className={
                                    // m.isOpened ? 
                                    //     `${styles.secondLevelBlock} ${styles.secondLevelBlockOpened}`
                                    //     :
                                    `${styles.secondLevelBlock}`
                                }
                            >
                                {renderThirdLevelMnu(m.pages, menuItem.route)}
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const renderThirdLevelMnu = (pages: PageItem[], route: string) => {
        return (
            pages.map((page, index) => (
                <motion.div key={page._id} variants={variantsChildren}>
                    <Link href={`/${route}/${page.alias}`}>
                        <a
                            className={
                                `/${route}/${page.alias}` === router.asPath ?
                                    `${styles.thirdLevel} ${styles.thirdLevelActive}`
                                    :
                                    styles.thirdLevel
                            }
                        >
                            {page.category}
                        </a>
                    </Link>
                </motion.div>
            )
            )
        );
    };

    return (
        <div className={styles.menu}>
            {renderFirstLevelMnu()}
        </div>
    );
};