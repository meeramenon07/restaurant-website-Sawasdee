import React from 'react'

const Sidebar = () => (
  <section>
    <div className='sidebar'>
      <div className="info">
        <i id="purple" className="fas fa-map-marker-alt"></i><h4> Find Us! </h4>
        <address><p><em>
          5050 Soquel Dr<br/>
          Soquel, California<br/>
          95073
        </em></p></address><br/>
      </div>
      <div className="info">
        <i id="purple" className="fas fa-business-time"></i>
        <h4> Open Daily! </h4>
        <p><em>
          Sun-Thurs: <br/>
          11:00AM - 9:30PM <br/>
          Fri-Sat: <br/>
          11:00AM - 10:00PM
        </em></p><br/>
      </div>
      <div className="info">
        <i id="purple" className="fas fa-phone"></i>
        <h4> Call Us! </h4>
        <p><em>
          <a href="tel:+1-831-462-5051">(831) 462-5051</a> <br/>
          <a href="tel:+1-831-431-6988">(831) 431-6988</a>
        </em></p><br/>
      </div>
      <div className="info">          
        <i id="purple" className="fas fa-envelope"></i>
        <h4> Email Us! </h4>
        <address><p><em>
          <a href="mailto:sawasdee5050@gmail.com">sawasdee5050@gmail.com</a>
        </em></p></address><br/>
      </div>
    </div>
  </section>
)

export default Sidebar