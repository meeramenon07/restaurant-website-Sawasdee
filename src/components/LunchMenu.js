import React from 'react'
import {Link} from 'react-router-dom'
//import '../css/NotHomepage.css';

const LunchMenu = () => {
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


export default LunchMenu
