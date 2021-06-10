import React from 'react';
import '../style/NavBar.css';
// import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';

const NavBar=()=>{
  return(
    <div>
      <header class="navbar_main">
        <div class="nav_brand">My Brand</div>
        <div class="nav_links">
            <ul class="nav_links_list">
                <li><NavLink to="/" class="home">HOME</NavLink></li>
                <li><NavLink to="/login" class="login">LOGIN</NavLink></li>
                <li><NavLink to="/register" class="signup">REGISTER</NavLink></li>
            </ul>
        </div>
        
    </header>
    </div>
  )
}

export default NavBar;