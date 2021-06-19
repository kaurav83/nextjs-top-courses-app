import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import React from 'react';
import { Htag } from '../../components/Htag/Htag';
import { Tag } from '../../components/Tag/Tag';
import { HhDataElement } from '../../components/HhDataElement/HhDataElement';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { Advantages } from '../../components/Advantages/Advantages';
import { Paragraph } from '../../components/Paragraph/Paragraph';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag="h1">
                    {page.title}
                </Htag>
                {!!products && <Tag color="grey" size="m">{products.length}</Tag>}
                <span>Сортировка</span>
            </div>
            <div>
                {
                    !!products && products.map(product => 
                        <div key={product._id}>{product.title}</div>
                    )
                }
            </div>
            <div className={styles.hhTitle}>
                <Htag tag="h2">
                    Вакансии - {page.category}
                </Htag>
                <Tag color="red" size="m">hh.ru</Tag>
            </div>
            {
                firstCategory === TopLevelCategory.Courses && page.hh && <HhDataElement {...page.hh} />
            }
            {
                page.advantages && !!page.advantages.length 
                    && 
                    <>
                        <Htag tag="h2">Преимущества</Htag>
                        <Advantages advantages={page.advantages} />
                    </>
            }
            {
                page.seoText && <Paragraph size="m">
                    <span dangerouslySetInnerHTML={{__html: page.seoText}} />
                </Paragraph>
            }
            <Htag tag="h2">Получаемые навыки</Htag>
            {
                page.tags.map(tag => <Tag size="s" color='primary' key={tag}>{tag}</Tag>)
            }
        </div>
    );
};

 