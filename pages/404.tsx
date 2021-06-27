import React from 'react';
import { withLayout } from '../layout/Layout';
import { Htag } from '../components/Htag/Htag';

const Error404 = (): JSX.Element => {
    return (
        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: "tomato"}}>
            <Htag tag="h1">
                Данной страницы не существует. Ошибка 404
            </Htag>
        </div>
    );
};

export default withLayout(Error404);