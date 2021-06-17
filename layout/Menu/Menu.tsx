import styles from './Menu.module.css';
import classnames from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';
import CoursesIcon from './icons/courses.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import ServicesIcon from './icons/services.svg';

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
    { route: 'products', name: 'Товары', icon: <ProductsIcon />, id: TopLevelCategory.Products }
];

export const Menu = (): JSX.Element => {
    const { menu, firstCategory, setMenu } = useContext(AppContext);

    const renderFirstLevelMnu = () => {
        return (
            <>
                {
                    firstLevelMenu.map(mnu => (
                        <div key={mnu.route}>
                            <a href={`/${mnu.route}`}>
                                <div className={classnames(styles.firstLevel, {
                                    [styles.firstLevelActive]: mnu.id === firstCategory
                                })}>
                                    {mnu.icon}
                                    <span>{mnu.name}</span>
                                </div>
                            </a>
                            {mnu.id === firstCategory && renderSecondLevelMnu(mnu)}
                        </div>
                    ))
                }
            </>
        );
    };

    const renderSecondLevelMnu = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>{m._id.secondCategory}</div>
                        <div className={classnames(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpened
                        })}>
                            {renderThirdLevelMnu(m.pages, menuItem.route)}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const renderThirdLevelMnu = (pages: PageItem[], route: string) => {
        return (
            pages.map((page, index) => (
                <a
                    href={`/${route}/${page.alias}`}
                    className={classnames(styles.thirdLevel, {
                        [styles.thirdLevelActive]: false
                    })}
                    key={page._id}
                >
                    {page.category}
                </a>
            )
            )
        );
    };

    return (
        <div className={styles.menu}>
            <ul>
                {renderFirstLevelMnu()}
            </ul>
        </div>
    );
};