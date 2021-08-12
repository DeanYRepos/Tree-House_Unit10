import React, { useState, useContext } from 'react';
import Header from './Header';
import Form from './Form';
import  { Context }  from '../Context';


const UserSignUp = ()=> {

    const context = useContext(Context)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const submit = () =>{
       
        const {
            firstName,
            lastName,
            emailAddress,
            password,
            confirmPassword
        } = [setFirstName(firstName), 
            setLastName(lastName),
            setEmailAddress(emailAddress),
            setPassword(password),
            setConfirmPassword(confirmPassword)
        ]
        const user = {
            firstName,
            lastName,
            emailAddress,
            password,
            confirmPassword
        }
        context.data.createUser(user)
        .then(errors => {
            if(errors.length){
                setErrors({errors});
            }else {
                console.log(`${firstName} was successfully signed up!`)
            }
        })
        .catch(err => {
            console.log(err);
            context.history.push('/error')
        });
    }
    const cancel = () =>{
        context.history.push('/');
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
                submit = {submit()}
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
                 <p>Already have a user account? Click here to <a href="sign-in.html">sign in</a>!</p>
            </div>
         </main>
        </div>
    )

 

}

export default UserSignUp;