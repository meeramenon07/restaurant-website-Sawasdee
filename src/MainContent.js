import React from 'react'
import SlideShow from './SlideShow.js'
import Sidebar from './Sidebar.js'

class MainContent extends React.Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <div id="body">
        <div className='row'>
          <div className='column'>
            <Sidebar />
          </div>
          <div class='column'>
            <div class='content'>
              <SlideShow />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContent