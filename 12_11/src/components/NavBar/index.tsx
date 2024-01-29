import "./index.css"
import React from 'react'


function NavBar() : React.JSX.Element {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h1>logo</h1>
            </div>

            <ul className="navbar__links">
                <li className="navbar__link">
                    <a href="/">gome</a>
                </li>
                <li className="navbar__link">
                    <a href="/">about</a>
                </li>
                <li className="navbar__link">
                    <a href="/">info</a>
                </li>


            </ul>
        </nav>
    )
}


export default NavBar