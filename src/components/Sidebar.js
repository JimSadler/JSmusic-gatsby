import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "gatsby"
import DarkModeToggle from './UseDarkMode.js';


export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link className="menu-item" to="/jimbio">Bio</Link>

      <Link className="menu-item" to="/sounds">Sounds</Link>
      <Link className="menu-item" to="/lessons">Lessons</Link>
      <Link className="menu-item" to="/testimonials">Testimonials</Link>
      <Link className="menu-item" to="/contact-us">Contact</Link>
      <DarkModeToggle className="menu-item" />
    </Menu>
  );
};
