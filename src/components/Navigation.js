import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Homepage</NavLink>
          <NavLink to="/internetdrone">Internet Drone</NavLink>
          <NavLink to="/soundcleaner">Soundcleaner</NavLink>
       </div>
    );
}
 
export default Navigation;