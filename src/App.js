import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './css/App.css';
/* Components */
import Header from './components/Header.js'
import SlideShow from './components/Slideshow.js'
import Sidebar from './components/Sidebar.js'
import Footer from './components/Footer.js'
/* Menu Components */
import LunchMenu from './components/LunchMenu.js'
import DinnerMenu from './components/DinnerMenu.js'
import OnlineMenu from './components/OnlineMenu.js'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="clr"></div>

        <div className="menuAndNavContainer">
          <Route exact path='/LunchMenu' component={LunchMenu} />
          <Route exact path='/DinnerMenu' component={DinnerMenu} />
          <Route exact path='/OrderOnline' component={OnlineMenu} />
        </div>
        <div className="container">
          <Route exact path='/' component={SlideShow} />
          <Route path='/' component={Sidebar} />
        </div>

        <Footer />
        </div>
    </BrowserRouter>) 
}

export default App;
