import React from 'react'
import {Link} from 'react-router-dom'
import { StickyContainer, Sticky } from 'react-sticky'
//import '../css/NotHomepage.css';

class LunchMenu extends React.Component {

  
  componentDidMount() {
    
    window.onscroll = function() {myFunction()};
  }
  
  render(){
    return (
      <div className="menuAndNavContainer">
        <div id="menuNav">
            <h4> Menu Navigation </h4>
            <a href="#lunchSpecials">Lunch Specials</a>
            <a href="#lunchCombinations">Combinations</a>
            <a href="#lunchSoup">Noodle Soup</a>
            <a href="#lunchNoodles">Lunch Noodles</a>
            <a href="#lunchSides">Sides</a>
            <a href="#lunchDesserts">Desserts</a>
            <a href="#lunchBeverages">Beverages</a>
            <a href="#lunchBeer">Beer</a>
        </div>
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
          <img
            src="/menu/Dinner11Side.png"
            id="lunchSides"
          />
          <img
            src="/menu/Dinner12Dessert.png"
            id="lunchDesserts"
          />
          <img
            src="/menu/Dinner13Beverages.png"
            id="lunchBeverages"
          />
          <img
            src="/menu/Dinner14Beer.png"
            id="lunchBeer"
          />
        </div>
      </div>
    )
    
  }
  
}

function myFunction() {
    if (window.location.href === "http://localhost:3000/LunchMenu") {
      // Get the navbar
      var navbar = document.getElementById("menuNav");

      // Get the offset position of the navbar
      var sticky = navbar.offsetTop;

      // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }         
    }
}

export default LunchMenu
