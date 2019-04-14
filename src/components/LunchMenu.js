import React from 'react'
import {Link} from 'react-router-dom'
import '../css/NotHomepage.css';

const LunchMenu = () => (
  <div style={{position: "relative"}}>
    <div className="menuContainer">
      <img
        src="/menu/Lunch0Specials.png"
        id="lunchSpecials"
      />
      <img
        src="/menu/Lunch1Combinations.png"
        id="lunchCombinations"
      />
      <img
        src="/menu/Lunch2NoodleSoup.png"
        id="lunchSoup"
      />
      <img
        src="/menu/Lunch3Noodles.png"
        id="lunchNoodles"
      />
    </div>
      <nav className="lunchNav">
          <a href="#lunchSpecials">Lunch Specials</a>
          <a href="#lunchCombinations">Combinations</a>
          <a href="#lunchSoup">Noodle Soup</a>
          <a href="#lunchNoodles">Lunch Noodles</a>
      </nav>
    
  </div>
)

export default LunchMenu

//<img src="https://sawasdeesoquel.com/menus/LunchMenu.png"/>

//<embed src="https://drive.google.com/viewerng/
//viewer?embedded=true&url=https://sawasdeesoquel.com/menus/LunchEmbeded.pdf"/>