import React from 'react'
import Sidebar from './Sidebar.js'
import SlideShow from './Slideshow.js'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class MainContent extends React.Component {
  constructor() {
    super()
  }
  
  render() {
    
    return (
      <div className="container">
        <SlideShow />
        <Sidebar />
      </div>
    )
  }
}

export default MainContent