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
          alt="Lunch Specials"
          
        />
        <img
          src="/menu/Lunch1Combinations.png"
          id="lunchCombinations"
          alt="Lunch Combinations"
          
        />
        <img
          src="/menu/Lunch2NoodleSoup.png"
          id="lunchSoup"
          alt="Lunch Noodle Soup"
          
        />
        <img
          src="/menu/Lunch3Noodles.png"
          id="lunchNoodles"
          alt="Lunch Noodles"
          
        />
        <img
          src="/menu/Dinner11Side.png"
          id="lunchSides"
          alt="Sides"
          
        />
        <img
          src="/menu/Dinner12Dessert.png"
          id="lunchDesserts"
          alt="Desserts"
          
        />
        <img
          src="/menu/Dinner13Beverages.png"
          id="lunchBeverages"
          alt="Beverages"
          
        />
        <img
          src="/menu/Dinner14Beer.png"
          id="lunchBeer"
          alt="Beer"
          
        />
      </div>
    </div>
  ) 
} 


export default LunchMenu
