import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';



const UserSignUp = ({ Context })=> {

   
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    
     const submit = () =>{
 
        const user =     {  
            firstName,
            lastName,
            emailAddress,
            password,
            confirmPassword,
            errors
       };
    Context.data.createUser(user)
            .then(errors => {
                if(errors.length){
                    setErrors({errors});
                }else {
                    console.log(`${firstName} was successfully signed up!`)
                }
         })
          .catch(err => {
            console.log(err);
            Context.history.push('/error')
         });
      }

    const cancel = () =>{
        Context.history.push('/');
    }

    
    return(
        <div id="root">
            <Header/>
         <main>
             <div className="form--centered">
                <h2>Sign Up</h2>
             <Form 
                cancel = {cancel}
                errors = {setErrors(errors)}
                submit = {submit}
                submitButtonText = "Sign Up"
                elements = {() => (
                    <React.Fragment>
                        <input
                            id="firstName" 
                            name="firstName" 
                            type="text" 
                            value={firstName} />
                         <input
                            id="lastName" 
                            name="lastName" 
                            type="text" 
                            value={lastName} />
                         <input
                            id="emailAddress" 
                            name="emailAddress" 
                            type="emailAddress" 
                            value={emailAddress} />   
                         <input
                            id="password" 
                            name="password" 
                            type="password" 
                            value={password} />
                         <input
                            id="confirmPassword" 
                            name="confirmPassword" 
                            type="password" 
                            value={confirmPassword} />             
                    </React.Fragment>
                )}
             />
                 <p>Already have a user account? Click here to <a href="sign-in.html">sign in</a>!</p>
            </div>
         </main>
        </div>
    )

 

}

export default UserSignUp;