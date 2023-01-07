import React from 'react';
import './TodoLoader.css';
import { BallTriangle } from 'react-loader-spinner';

function TodoLoader() {
  return (
    <BallTriangle height={80} width={80} color={'#53EBF4'} wrapperClass={'Loader'} />
  )
};

export { TodoLoader };