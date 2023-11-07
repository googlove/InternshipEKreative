import React from "react";
import {NavLink} from "react-router-dom";

export const Nav = ({className, activeClassName}) => (
  <nav className={className}>
    <ul>
      <li><NavLink to="/"
                   className={({isActive}) => isActive ? activeClassName : undefined}>Home</NavLink></li>
      <li><NavLink to="/aboutUs"
                   className={({isActive}) => isActive ? activeClassName : undefined}>About us</NavLink></li>
      <li><NavLink to="/comingSoon"
                   className={({isActive}) => isActive ? activeClassName : undefined}>Features</NavLink></li>
      <li><NavLink to="/pricing"
                   className={({isActive}) => isActive ? activeClassName : undefined}>Pricing</NavLink></li>
      <li><NavLink to="/comingSoon"
                   className={({isActive}) => isActive ? activeClassName : undefined}>FAQ</NavLink></li>
      <li><NavLink to="/comingSoon"
                   className={({isActive}) => isActive ? activeClassName : undefined}>Blog</NavLink></li>
    </ul>
  </nav>
);