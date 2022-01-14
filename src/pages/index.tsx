import { NextPage } from 'next';
import { FC, useEffect } from 'react';

const Home: NextPage = ({ children }) => {
  useEffect(() => {
    console.log('Hi');
  }, [children]);

  return <div className="">Hello Test</div>;
};

export default Home;
