import React from 'react';
import '../style/NavBar.css';
// import 'bootstrap/dist/css/bootstrap.css';

const NavBar=()=>{
  return(
    <div>
      <header class="navbar_main">
        <div class="nav_brand">My Brand</div>
        <div class="nav_links">
            <ul class="nav_links_list">
                <li><a href="/" class="home">HOME</a></li>
                <li><a href="/login" class="login">LOGIN</a></li>
                <li><a href="/register" class="signup">REGISTER</a></li>
            </ul>
        </div>
        
    </header>
    </div>
  )
}

export default NavBar;