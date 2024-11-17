import React from "react";
import {Link} from 'react-router-dom';
import "./App.css";

function Navbar(){
    return(
        <>
            <ul className="nav">
                <li><Link style={{color:"black", textDecoration:"none",  float:"right"}} to="/Cart">Cart</Link></li>
                <li><Link style={{color:"black", textDecoration:"none"}} to="/">Products</Link></li>
{/*                 <li><Link style={{color:"black", textDecoration:"none",  float:"right"}} to="/signup">SignUp</Link></li> */}
            </ul>
        </>
    )
}

export default Navbar;
