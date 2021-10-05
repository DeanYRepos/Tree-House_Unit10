import React, {useContext} from 'react';
import  { Context }  from '../Context';
import { Link } from 'react-router-dom';


const Header = () => {
   const context = useContext(Context);
   const authUser = context.authenticatedUser;
    return(
        <header>

        <div className="wrap header--flex">
        <h1 className="header--logo"><a href="/">Courses</a></h1>
        <nav>
        {authUser ? 
        <React.Fragment>
            <ul className="header--signedin">
           <span>Welcome, {authUser.firstName}! </span>
            <Link className="signout" to="/signout">Sign Out</Link>
            </ul>
        </React.Fragment>
        :
        <React.Fragment>
        <ul className="header--signedout">
          <li>  <Link to="/signup">Sign Up</Link></li>
          <li> <Link to="/signin">Sign In</Link></li>
         </ul>
        </React.Fragment>
        } 
    
        </nav>
       
    </div>
        </header>
    )
}
export default Header;