import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Htag } from '../components';
import { Button } from '../components';
import { Paragraph } from '../components';
import { Tag } from '../components';
import { Rating } from '../components';
// import { Layout } from '../layout/Layout';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        // <Layout>
        <>
            <Htag tag='h1'>NEW TEST TITLE H1</Htag>

            <Button 
                appearance='primary' 
                tag='button'
                className='test'
                arrow='right'
            >
                Simple button
            </Button>

            <Button appearance='ghost' tag='button' arrow='down'>
                Ghost btn
            </Button>

            <Paragraph size='l'>
                SOME CONTENT PARAGRAPH
            </Paragraph>
            <Paragraph size='xl'>
                SOME CONTENT PARAGRAPH second
            </Paragraph>
            <Tag size="s" color="primary">some tag first</Tag>
            <Tag size="m" color="red">some tag second</Tag>
            <Tag size="m" color="ghost">some tag second</Tag>
            <Tag size="m" color="green">some tag second</Tag>
            <Tag size="m" color="grey">some tag second</Tag>
            <Rating rating={rating} isEditable setRating={setRating} />
        </>
        //</Layout>
  );
}

export default withLayout(Home);