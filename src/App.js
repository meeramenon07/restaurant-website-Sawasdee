import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

/* Styles */
import './css/App.css';
/* Components */
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Sidebar from './components/Sidebar.js'
import SlideShow from './components/Slideshow.js'
/* Menu Components */
import LunchMenu from './components/LunchMenu.js'
import DinnerMenu from './components/DinnerMenu.js'

const App = () => { 
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="clr"/>

        <div className="menuAndNavContainer">
          <Route exact path='/LunchMenu' component={LunchMenu} />
          <Route exact path='/DinnerMenu' component={DinnerMenu} />

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
