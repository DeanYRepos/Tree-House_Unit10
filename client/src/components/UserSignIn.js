import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from './Header';
import Form from './Form'
import  { Context }  from '../Context';

const UserSignIn = () => {
    const context = useContext(Context);
    let history = useHistory();
    
    const [emailAddress, setEmailAddress] = useState("");
    const[password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const change = (e) =>{
      const value = e.target.value;
    }
 
    const submit = () => {
      const users = {
        emailAddress,
        password,
        
      }
      context.actions.signIn(users)
      .then(user => {
        if(user === null){
          setErrors(()=> {
            return {errors: ['Sign in was unsuccessful'] };
          });
        } else {
          history.push('/authenticated')
          console.log(`SUCCESS! ${emailAddress} is logged in!`);
        }
      })
      .catch(err => {
        console.log(err);
        history.push('/error');
      })
    }
    const cancel = () =>{
      history.push('/');
   }


    return(
        <div id="root">
         <Header/>
          <main>
            <div className="form--centered">
              <h2>Sign In</h2>
              <form>
                  <label htmlFor="emailAddress">Email Address</label>
                  <input id="emailAddress" name="emailAddress" type="email" defaultValue />
                  <label htmlFor="password">Password</label>
                  <input id="password" name="password" type="password" defaultValue />
                  <button className="button" type="submit">Sign In</button><button className="button button-secondary" onClick="event.preventDefault(); location.href='index.html';">Cancel</button>
                </form>
                <p>Don't have a user account? Click here to <Link to="/signup">sign up</Link>!</p>
            </div>
          </main>
        </div>
     )


}

export default UserSignIn;