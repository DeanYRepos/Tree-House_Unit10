import React, { useState, useContext } from 'react';
import Header from './Header';
import Form from './Form';


const UserSignUp = ()=> {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);


    
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
                            value={setFirstName(firstName)} />
                         <input
                            id="lastName" 
                            name="lastName" 
                            type="text" 
                            value={setLastName(lastName)} />
                         <input
                            id="emailAddress" 
                            name="emailAddress" 
                            type="emailAddress" 
                            value={setEmailAddress(emailAddress)} />   
                         <input
                            id="password" 
                            name="password" 
                            type="password" 
                            value={setPassword(password)} />
                         <input
                            id="confirmPassword" 
                            name="confirmPassword" 
                            type="password" 
                            value={setConfirmPassword(confirmPassword)} />             
                    </React.Fragment>
                )}
             />
    
            </div>
         </main>
        </div>
    )

    

}

export default UserSignUp;