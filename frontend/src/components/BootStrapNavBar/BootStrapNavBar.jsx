import React from 'react';
import { NavLink ,Redirect} from 'react-router-dom';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


// import {  } from 'react-bootstrap';
import {Navbar,Nav,Container} from 'react-bootstrap';

const BootStrapNavBar =()=>{

return(
<>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
   
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/todo">TODO</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/heatmap">HEAT MAP</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/linebar">LINE BAR</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/pie">PIE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/contour">CONTOUR</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/parallel">PARALLEL CORDINATE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/reactReduxFormWithHooks">REACT-REDUX FORM</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">LOGOUT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
);
}

export default BootStrapNavBar;