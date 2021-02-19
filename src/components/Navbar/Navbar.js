import React from 'react'
import  "./Navbar.scss";
import Logo from "../../images/logo-bookmark.svg";
import Hamburger from "../../images/icon-hamburger.svg";
import {useGlobalContext} from "../context api/context"

const Navbar = () => {
const {show, setShow} = useGlobalContext();
    return (
      <nav>
          <div className="container nav-center">
           {show ? null : <img src={Logo} alt="Logo"/>}
            {show ? null : <div className="toggle">
                <img src={Hamburger} alt="hamburger" onClick={() => setShow(true)}/>
            </div>}
            <ul className="nav-links">
                <li><a href="/" className="nav-link">Features</a></li>
                <li><a href="/" className="nav-link">pricing</a></li>
                <li><a href="/" className="nav-link">contact</a></li>
           <button className="nav-btn">Login</button>
            </ul>
          </div>
      </nav>
    )
}

export default Navbar
