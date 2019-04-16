import React from 'react'

class DinnerMenu extends React.Component {
 
  componentDidMount() {
    window.onscroll = function() {myFunction()};
  }
  
  render() {
    return (
      <div className="menuAndNavContainer">
        <div id="lunchNav">
            <h4> Menu Navigation </h4>
            <a href="#dinnerAppetizers">Appetizers</a>
            <a href="#dinnerSalads">    Salads</a>
            <a href="#dinnerSoup">     Soups</a>
            <a href="#dinnerCurry">     Curry</a>
            <a href="#dinnerOther">     Other Dishes</a>
            <a href="#dinnerSeafood">   Seafood</a>
            <a href="#dinnerChef">      Chef's Special</a>
            <a href="#dinnerHouse">     House Specials</a>
            <a href="#dinnerNoodles">   Noodles</a>
            <a href="#dinnerFR">        Fried Rice Dishes</a>
            <a href="#dinnerNoodleSoup">Noodle Soup</a>
            <a href="#dinnerSides">     Sides</a>
            <a href="#dinnerDesserts">   Desserts</a>
            <a href="#dinnerBeverages"> Beverages</a>
            <a href="#dinnerBeer">      Beer</a>
        </div>
        <div className="menuContainer">
          <img
            src="/menu/Dinner00Appetizers.png"
            id="dinnerAppetizers"
          />
          <img
            src="/menu/Dinner01Salads.png"
            id="dinnerSalads"
          />
          <img
            src="/menu/Dinner02Soup.png"
            id="dinnerSoup"
          />
          <img
            src="/menu/Dinner03Curry.png"
            id="dinnerCurry"
          />
          <img
            src="/menu/Dinner04OtherDishes.png"
            id="dinnerOther"
          />
          <img
            src="/menu/Dinner05Seafood.png"
            id="dinnerSeafood"
          />
          <img
            src="/menu/Dinner06Chef.png"
            id="dinnerChef"
          />
          <img
            src="/menu/Dinner07House.png"
            id="dinnerHouse"
          />
          <img
            src="/menu/Dinner08Noodles.png"
            id="dinnerNoodles"
          />
          <img
            src="/menu/Dinner09FriedRice.png"
            id="dinnerFR"
          />
          <img
            src="/menu/Dinner10NoodleSoup.png"
            id="dinnerNoodleSoup"
          />
          <img
            src="/menu/Dinner11Side.png"
            id="dinnerSides"
          />
          <img
            src="/menu/Dinner12Dessert.png"
            id="dinnerDesserts"
          />
          <img
            src="/menu/Dinner13Beverages.png"
            id="dinnerBeverages"
          />
          <img
            src="/menu/Dinner14Beer.png"
            id="dinnerBeer"
          />
        </div>
      </div>
    )
  }
}

function myFunction() {
    if (window.location.href === "http://localhost:3000/DinnerMenu") {
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
}

export default DinnerMenu