import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Header = () => (
  <header>
    <Link exact to="/">
      <div>
        <h1 id="title">Sawasdee <br/>Thai Cuisine</h1>
      </div>
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
          <NavLink 
            className="nav-item"
            activeClassName="active"
            exact to="/OrderOnline"
          > Order Online
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header