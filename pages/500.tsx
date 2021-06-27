import React from 'react';
import { withLayout } from '../layout/Layout';
import { Htag } from '../components/Htag/Htag';

const Error500 = (): JSX.Element => {
    return (
        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: "tomato"}}>
            <Htag tag="h1">
                Ошибка 500
            </Htag>
        </div>
    );
};

export default withLayout(Error500);