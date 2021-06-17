import { createContext, ReactNode, PropsWithChildren, useState } from 'react';
import { MenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

export interface IAppContext {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    setMenu?: (newMenu: MenuItem[]) => void;

}

export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: TopLevelCategory.Courses });

export const AppContextProvider = ({menu, firstCategory, children}: PropsWithChildren<IAppContext>): JSX.Element => {
    // вместо такой записи IAppContext & { children: ReactNode } используем более элегантный PropsWithChildren<IAppContext>
    // PropsWithChildren позволяет нам указать, что передаваемый в него interface IAppContext  должен так же содержать и children

    const [menuState, setMenuState] = useState<MenuItem[]>(menu);

    const setMenu = (newMenu: MenuItem[]) => {
        setMenuState(newMenu);
    };
    
    return <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
                {children}
            </AppContext.Provider>;
};