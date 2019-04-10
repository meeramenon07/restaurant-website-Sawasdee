import React, { Component } from 'react';

//import logo from './logo.svg';
import '../css/App.css';
import Header from './Header.js'
import MainContent from './MainContent.js'
import Footer from './Footer.js'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="clr"></div>
        <MainContent />
        <div className="clr"></div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
