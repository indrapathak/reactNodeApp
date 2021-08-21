import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';


const Navbar=() => {

    return (
    < >
       <NavLink exact activeClassName="active_class" to="/">TODO</NavLink>
       <NavLink exact activeClassName="active_class" to="/heatmap">HEAT MAP</NavLink>
       <NavLink exact activeClassName="active_class"  to="/linebar">LINE BAR</NavLink>
       <NavLink exact activeClassName="active_class"  to="/parallel">PARALLEL CORDINATE</NavLink>
       <NavLink exact activeClassName="active_class" to="/pie">PIE</NavLink>
       <NavLink exact activeClassName="active_class" to="/contour">CONTOUR</NavLink>
       <Redirect to="/" />

     </>
    );
}

export default Navbar;