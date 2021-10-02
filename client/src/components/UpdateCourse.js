import React, {  useState, useEffect, useContext } from 'react';
import  { Context }  from '../Context';
import { useHistory, useParams } from 'react-router-dom';
import Header from './Header';
import Form from './Form';


const UpdateCourse = () => {

    const context = useContext(Context);
    let history = useHistory();
    const { id } = useParams();
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
      //useEffect I think

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
       
        context.data.updateCourse(courseDetails, id).
        then( errors => {
          if(errors.length) {
            setErrors({errors});
          } else {
            console.log("Course was successfully updated!");
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

    return(
        <div id="root">
        <Header/>
            <main>
                <div className="wrap">
                  <h2>Update Course</h2>
                  <Form
                    cancel = {cancel}
                    errors = {errors}
                    submit = {submit} 
                    submitButtonText = "Update Course"
                    elements= {()=> (
                       <React.Fragment>
                         <div className="main--flex">
                             <div>
                             <label htmlFor="courseTitle">Course Title</label>
                             <input 
                                 id="courseTitle"
                                 name="courseTitle"
                                 type="text" 
                                 defaultValue={course.title} />

                                    <p>By Joe Smith</p>
                             </div>
                         </div>
                       </React.Fragment>
                    )}  
                  />
                </div>
            </main>
        </div>
    )
}

export default UpdateCourse;