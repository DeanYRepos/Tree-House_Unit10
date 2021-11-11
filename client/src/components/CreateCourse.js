import React, {  useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import  { Context }  from '../Context';
import Form from './Form';

const CreateCourse = () => {

   const context = useContext(Context);
   let history = useHistory();
   const authUser = context.authenticatedUser;
   const [title, setTitle] = useState();
   const [description, setDescription] = useState();
   const [estimatedTime, setEstimatedTime] = useState();
   const [materialsNeeded, setMaterialsNeeded] = useState();
   const [userId, setUserId] = useState(context.authenticatedUser.userId);
   const [errors, setErrors] = useState([]);
   console.log(authUser);
 
    const change = (e) => {
      const value = e.target.value
      if (e.target.name === 'courseTitle'){
        setTitle(value); 
        }
        else if (e.target.name === 'courseDescription') {
          setDescription(value);
          }
        else if (e.target.name === 'estimatedTime') {
          setEstimatedTime(value);
        }  
        else if (e.target.name === 'materialsNeeded') {
          setMaterialsNeeded( value);
        }
        else {
          return;
        }
    }

    const submit = () => {

      const courseDetails = {
        title,
        description,
        estimatedTime,
        materialsNeeded,
        userId,
        errors
      
      };
      console.log(courseDetails);
     
      context.data.createCourse(courseDetails, authUser.emailAddress, authUser.password)
      .then( errors => {
        if(errors.length) {
          console.log('bad stuff');
          setErrors({errors});
        } else {
          console.log("Course was successfully created!");
          history.push('/')
        }
      })
      .catch(err => {
        console.log(err);
        history.push('/error');
       
      });
     
    }
    
    const cancel = () =>{
      history.push('/');
   }

    return (
        <div id="root">
          
          <main> 
            <div className="wrap">
        <h2>Create Course</h2>
        {/* <div className="validation--errors">
          <h3>Validation Errors</h3>
          <ul>
            <li>Please provide a value for "Title"</li>
            <li>Please provide a value for "Description"</li>
          </ul>
        </div> */}
         <Form  
                cancel = {cancel}
                errors = {errors}
                submit = {submit} 
                submitButtonText = "Create Course"
                elements= {()=> (
                  
                    <React.Fragment>
                      <div className= "main--flex">
                      <div>
                      <label htmlFor="courseTitle">Course Title</label>
                      <input 
                      id="courseTitle" 
                      name="courseTitle" 
                      type="text" 
                      defaultValue={title}
                      onChange={change}
                      />
                      
                         
                      <p>By {`${authUser.firstName} ${authUser.lastName}`}</p> 
                        
                      <label htmlFor="courseDescription">Course Description</label>
                       <textarea 
                        id="courseDescription" 
                         name="courseDescription"
                         defaultValue={description} 
                         onChange={change}  
                       />
                         </div>
                         <div>
                         <label htmlFor="estimatedTime">Estimated Time</label>
                         <input 
                           id="estimatedTime" 
                           name="estimatedTime"
                           type="text" 
                           defaultValue={estimatedTime}
                           onChange={change}
                           />
                        
                         <label htmlFor="materialsNeeded">Materials Needed</label>
                         <textarea 
                           id="materialsNeeded" 
                           name="materialsNeeded" 
                           defaultValue={materialsNeeded} 
                           onChange={change}  
                         />
                         </div>
                         </div>
                    </React.Fragment>
                  
                )} />
       
          {/* <button className="button" type="submit" onClick={submit}>Create Course</button><button className="button button-secondary" onClick="event.preventDefault(); location.href='index.html';">Cancel</button> */}
      
      </div>
      </main>
        </div>
    )


}

export default CreateCourse;