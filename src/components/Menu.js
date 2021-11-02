import React from "react";
import { NavLink } from "react-router-dom";


const Menu = () => {
    return (
        <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
    <NavLink className="navbar-brand" exact to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " exact activeClassName="active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
        </li>
        
      </ul>
        
    </div>
  </div>
</nav>
    
        </>
    )
}

export default Menu


