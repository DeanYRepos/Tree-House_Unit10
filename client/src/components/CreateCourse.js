import React, {  useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import  { Context }  from '../Context';
import Header from './Header';
import Form from './Form';

const CreateCourse = () => {

    const context = useContext(Context);
    let history = useHistory();
    const authUser = context.authenticatedUser;

    const [course, setCourse] = useState({
      title:'',
      description:'',
      estimatedTime:'',
      materialsNeeded:'',
      userId: context.authenticatedUser
    });
   
   
    const [emailAddress, setEmailAddress] = useState()
    const [password, setPassword] = useState()
    const [errors, setErrors] = useState([]);

    const change = (e) => {
      const value = e.target.value
      if (e.target.name === 'title'){
        setCourse({title: value}); 
        }
        else if (e.target.name === 'description') {
          setCourse({description: value});
          }
        else if (e.target.name === 'estimatedTime') {
          setCourse({estimatedTime: value});
        }  
        else if (e.target.name === 'materialsNeeded') {
          setCourse({materialsNeeded: value});
        }
        else {
          return;
        }
    }

    const submit = () => {

      const courseDetails = {
        course,
        emailAddress,
        password,
        errors
      
      };
     
      context.data.createCourse(courseDetails).
      then( errors => {
        if(errors.length) {
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
            <Header/>
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
                      defaultValue={course.title}
                      onChange={change}
                      />
                      
                         
                      <p>{authUser}</p> {/**add authenticated user */}
                        
                      <label htmlFor="courseDescription">Course Description</label>
                       <textarea 
                        id="courseDescription" 
                         name="courseDescription"
                         defaultValue={course.description} 
                         onChange={change}  
                       />
                         </div>
                         <div>
                         <label htmlFor="estimatedTime">Estimated Time</label>
                         <input 
                           id="estimatedTime" 
                           name="estimatedTime"
                           type="text" 
                           defaultValue={course.estimatedTime}
                           onChange={change}
                           />
                        
                         <label htmlFor="materialsNeeded">Materials Needed</label>
                         <textarea 
                           id="materialsNeeded" 
                           name="materialsNeeded" 
                           defaultValue={course.materialsNeeded} 
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