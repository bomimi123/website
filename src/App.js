import React from 'react';

import { Blogg, Feature, Footer, Header, Possibillitys, WhatGPT3 } from './container';
import {CTA, Brand, Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradien__bg">
        <Navbar /> 
        <Header />
      </div>
      <Brand /> 
      <WhatGPT3/>
      <Feature />
      <Possibillitys />
      <CTA />
      <Blogg />
      <Footer />
    </div>
  )
}

export default App