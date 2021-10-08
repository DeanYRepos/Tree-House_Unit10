import React, { useState, useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Form from './Form'
import  { Context }  from '../Context';

const UserSignIn = () => {
    const context = useContext(Context);
    let history = useHistory();
    const location = useLocation();
    
    const [emailAddress, setEmailAddress] = useState(""); //Rjones123
    const[password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const change = (e) =>{
     
      const value = e.target.value;
      
        if(e.target.name === "emailAddress"){
          setEmailAddress(value);
        } 
        else if (e.target.name === "password"){
          setPassword(value);
        }
         else {
          return;
        }

    }
 
    const submit = () => {
      const { from } = location.state || {from: { pathname: '/'}};

      context.actions.signIn(emailAddress, password)
      .then(user => {
        if(user === null){
          setErrors(()=> {
            return {errors: ['Sign in was unsuccessful'] };
          });
        } else {
          history.push(from);
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
      
          <main>
            <div className="form--centered">
              <h2>Sign In</h2>
              <Form
                cancel= {cancel}
                errors={errors}
                submit={submit}
                submitButtonText = "Sign In"
                elements= {() => (
                  <React.Fragment>
                    <input
                      id="emailAddress"
                      name="emailAddress"
                      type="text"
                      value= {emailAddress}
                      onChange={change}
                      placeholder= "Email Address" />
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value= {password}
                      onChange={change}
                      placeholder= "Password" />
                    
                  </React.Fragment>
                )}
              />
                <p>Don't have a user account? Click here to <Link to="/signup">sign up</Link>!</p>
            </div>
          </main>
        </div>
     )


}

export default UserSignIn;