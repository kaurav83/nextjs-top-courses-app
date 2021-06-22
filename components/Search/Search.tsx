import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import React, { useState, MouseEvent, KeyboardEvent } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import SearchIcon from './searchIcon.svg';
import { useRouter } from 'next/router';
import { EventEmitter } from 'stream';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const handleSearchBtn = (e?: MouseEvent<HTMLButtonElement>) => {
        // e.preventDefault();
        // с помощью router.push мы говорим - перейди на путь search
        // и добавь query параметры, которые равны значению текущему search в локальном state
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearchBtn();
        }
    };

    return (
        <div className={`${className} ${styles.search}`} {...props}>
            <Input 
                placeholder="Поиск..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.input}
                onKeyDown={handleKeyDown}
            />
            <Button  
                appearance="primary"
                className={styles.button}
                onClick={(e) => handleSearchBtn(e)}
                tag="button"
            >
                <SearchIcon />
            </Button>
        </div>
    );
};