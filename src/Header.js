import React from "react"

function Header() {
	return (
		<div className="App">
        <header className="App-header">
        	<h3 id="title">Sawasdee Thai Cuisine</h3>
					<nav className="App-nav">
						<ul>
							<li><a 
                    className="nav-item"
                    href="./my-app/src/menus/Soquel_lunch.pdf"
                    target="_blank">Lunch Menu</a>
              </li>
							<li>•</li>
							<li><a 
                    className="nav-item"
                    href="./src/menus/Soquel_dinner.pdf"
                    target="_blank">Dinner Menu</a>
                  
              </li>
							<li>•</li>
							<li><a 
                    className="nav-item"
                    href="https://onlineorders.wawio.com/menu/58b094014f5ee90b787b23ce"
                    target="_blank">Order Online</a></li>
              <li></li>
    {/*<li>•</li>
              <li><a
                    className="nav-item"
                    href="#">Contact Us</a>
                    
              </li>*/}
						</ul>
					</nav>
        
        </header>
      </div>
	)
}

export default Header