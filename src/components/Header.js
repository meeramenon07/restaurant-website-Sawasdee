import React from 'react'
import { Link, NavLink } from 'react-router-dom'
//import '../css/App.css';


const Header = () => (
  <header>
    <Link exact to="/">
        <h1 id="title">Sawasdee <br/>Thai Cuisine</h1>
    </Link>
    <nav className="App-nav">
      <ul>
        <li>
          <NavLink 
            className="nav-item"
            activeClassName="active"
            exact to="/LunchMenu"
          > Lunch Menu
          </NavLink>
        </li>
        • 
        <li>
          <NavLink 
            className="nav-item"
            activeClassName="active"
            exact to="/DinnerMenu"
          > Dinner Menu
          </NavLink>
        </li>
        • 
        <li>
          <a 
            className="nav-item"
            activeClassName="active"
            href="https://onlineorders.wawio.com/menu/58b094014f5ee90b787b23ce"
            target="_blank"
            rel="noopener noreferrer"
          > Order Online
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header