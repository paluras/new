import React from "react";
import { Link } from "react-router-dom";


function Footer(){
    return( <footer>
        <div className="about">
          <div className="box red"></div>
          <Link to="/"> <p>Home</p></Link>
        </div>
        <div className="contact">
          <div className="box green"></div>
          <Link to="/bio"> <p>About</p></Link>
        </div>
        
        <div className="news">
          <div className="box yellow"></div>
          <Link to="/music"> <p>Portfolio</p></Link>
        </div>
        
        <div className="sport">
          <div className="box blue"></div>
          <Link to="/about-music"> <p>Band</p></Link>
        </div>
       </footer>)
}

export default Footer