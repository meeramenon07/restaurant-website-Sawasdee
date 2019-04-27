import React from 'react'

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
          src="/menu/0Specials.png"
          id="lunchSpecials"
          alt="Lunch Specials"
          
        />
        <img
          src="/menu/1Combinations.png"
          id="lunchCombinations"
          alt="Lunch Combinations"
          
        />
        <img
          src="/menu/2NoodleSoup.png"
          id="lunchSoup"
          alt="Lunch Noodle Soup"
          
        />
        <img
          src="/menu/3Noodles.png"
          id="lunchNoodles"
          alt="Lunch Noodles"
          
        />
        <img
          src="/menu/11Sides.png"
          id="lunchSides"
          alt="Sides"
          
        />
        <img
          src="/menu/12Desserts.png"
          id="lunchDesserts"
          alt="Desserts"
          
        />
        <img
          src="/menu/13Beverages.png"
          id="lunchBeverages"
          alt="Beverages"
          
        />
        <img
          src="/menu/14Beer.png"
          id="lunchBeer"
          alt="Beer"
          
        />
      </div>
    </div>
  ) 
} 


export default LunchMenu
