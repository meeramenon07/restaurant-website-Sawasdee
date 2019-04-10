import React from "react"
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


function Header() {
	return (
    <header>
      
        <h1 id="title">Sawasdee Thai Cuisine</h1>
        <nav className="App-nav">
          <ul>
            <li>
              <a 
                className="nav-item"
                href="https://www.sawasdeesoquel.com/Soquel_LunchMenu.pdf"
                target="_blank">Lunch Menu
              </a>
            </li>
            • 
            <li>
              <a 
                className="nav-item"
                href="https://www.sawasdeesoquel.com/Soquel_DinnerMenu.pdf"
                target="_blank">Dinner Menu
              </a>
            </li>
            • 
            <li>
              <a 
                className="nav-item"
                href="https://onlineorders.wawio.com/menu/58b094014f5ee90b787b23ce"
                target="_blank">Order Online
              </a>
            </li>
          </ul>
        </nav>
      
    </header>
	)
}

export default Header