import React from 'react';
import { Greeting } from '../components/Greeting';
export const HomePage = () => {
    return (
    <>
        <h1>The Home Page</h1>
        <Greeting name="Gerry" numberOfMessages={10} />
    </>
    )
};
