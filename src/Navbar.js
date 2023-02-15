import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Global.css'

const Navbar = () => {
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            B'S NEWS
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
               
                to="/"
                
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
               
                to="/business"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Business
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
               
                to="/lifestyle"
                
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                LifeStyle
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
               
                to="/technology"
                
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                 Technology
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
               
                to="/sports"
                
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                 Sports
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );

}


export default Navbar