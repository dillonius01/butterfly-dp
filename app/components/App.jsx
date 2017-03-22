import React, { Component } from 'react';
import Footer from './Footer';

const App = props => {
  const { children } = props;

  return (
    <div>
      { children }
    </div>
  )
}

export default App;

