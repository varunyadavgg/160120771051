import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar(){

    return <div><nav>
        <a><img className="logo" src="https://p.kindpng.com/picc/s/765-7657079_download-logo-twitter-computer-black-icons-free-transparent.png"></img></a>
        <a ><h4><Link className="LINK" to="/"> Register </Link></h4></a>
        <a ><h4><Link className="LINK" to="/events"> Authentication </Link></h4></a>
        <a><h4><Link className="LINK" to="/create"> Train Details </Link></h4></a>
        <div className="animation start-home"></div>
        
    </nav>
    </div>
}

export default Navbar;

