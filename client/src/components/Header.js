import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import  { Context }  from '../Context';

const Header = () => {
    const { context } = useContext(Context);
    return(
        <header>

        <div className="wrap header--flex">
        <h1 className="header--logo"><a href="/">Courses</a></h1>
        <nav>
            <ul className="header--signedout">
            <li><Link to="sign-up.html">Sign Up</Link></li>
            <li><Link to="sign-in.html">Sign In</Link></li>
            </ul>
        </nav>
       
    </div>
        </header>
    )
}
export default Header;