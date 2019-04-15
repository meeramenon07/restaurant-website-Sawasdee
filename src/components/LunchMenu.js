import React from 'react'
import {Link} from 'react-router-dom'
import { StickyContainer, Sticky } from 'react-sticky'
import '../css/NotHomepage.css';

class LunchMenu extends React.Component {

  
  componentDidMount() {
    window.onscroll = function() {myFunction()};

  }
  
  render(){
    return (
      <div className="menuAndNavContainer">
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
          <div id="lunchNav">
              <h4> Menu Navigation </h4>
              <Link to="#lunchSpecials">Lunch Specials</Link>
              <a href="#lunchCombinations">Combinations</a>
              <a href="#lunchSoup">Noodle Soup</a>
              <a href="#lunchNoodles">Lunch Noodles</a>
          </div>
      </div>
    )
    
  }
  
}

function myFunction() {
    // Get the navbar
    var navbar = document.getElementById("lunchNav");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }         
}

export default LunchMenu

//<img src="https://sawasdeesoquel.com/menus/LunchMenu.png"/>

//<embed src="https://drive.google.com/viewerng/
//viewer?embedded=true&url=https://sawasdeesoquel.com/menus/LunchEmbeded.pdf"/>