import React, { Component } from 'react';
import Footer from './Footer';

const App = props => {
  const { children } = props;

  return (
    <div>
      { children }
      <Footer />
    </div>
  )
}

export default App;

