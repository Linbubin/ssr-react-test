import React from 'react';
import Header from '../../components/Header'

const Home = () => (
    <div onClick={()=>{console.log(123)}}>
        <Header />
        Home
    </div>
);

export default Home;