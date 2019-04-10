import React from 'react'

function Sidebar() {
  return (
    
    <div className='sidebar'>
      <div className="info">
        <i id="purple" className="fas fa-map-marker-alt"></i>
        <p><em>
          5050 Soquel Dr<br/>
          Soquel, California<br/>
          95073
        </em></p><br/>
      </div>
      <div className="info">
        <i id="purple" className="fas fa-phone"></i>
        <p><em>
          <a href="tel:+1-831-462-5051">(831) 462-5051</a> <br/>
          <a href="tel:+1-831-431-6988">(831) 431-6988</a>
        </em></p><br/>
      </div>
      <div className="info">
        <i id="purple" className="fas fa-business-time"></i>
        <p><em>
          Sun-Thurs: <br/>
          11:00AM - 9:30PM <br/>
          Fri-Sat: <br/>
          11:00AM - 10:00PM
        </em></p><br/>
      </div>
      <div className="info">
        <i id="purple" className="fas fa-envelope"></i>
        <p><em>
          sawasdee5050@gmail.com
        </em></p>
      </div>
    </div>
  )
}

export default Sidebar