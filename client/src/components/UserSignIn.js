import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Form from './Form'
import  { Context }  from '../Context';

const UserSignIn = () => {
    const context = useContext(Context);
    
    const [emailAddress, setEmailAdress] = useState("");
    const[password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);



    return(
        <div id="root">
            <Header/>
  <main>
    <div className="form--centered">
      <h2>Sign In</h2>
        <Form/>
      <p>Don't have a user account? Click here to <Link to="/signup">sign up</Link>!</p>
    </div>
  </main>
</div>
    )


}

export default UserSignIn;