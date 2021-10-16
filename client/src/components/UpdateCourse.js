import React, {  useState, useEffect, useContext } from 'react';
import  { Context }  from '../Context';
import { useHistory, useParams } from 'react-router-dom';
import Form from './Form';
//import CourseDetail from './CourseDetail';


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
        // userId: context.authenticatedUser
      });
      // const [emailAddress, setEmailAddress] = useState()
      // const [password, setPassword] = useState()
      const [errors, setErrors] = useState([]);
      const [CourseDetails, setCourseDetails] = useState('');


     
     
    useEffect(() => {

        context.data.getCourse(id)
        .then(CourseDetails => {
            setCourseDetails(CourseDetails)
            console.log(CourseDetails);
        })
        .catch(err => history.push('./error') );

    }, [context.data, history, id])
   
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
          errors
        
        };
       
        context.data.updateCourse(courseDetails, id, authUser.emailAddress, authUser.password)
        .then( errors => {
          if(errors.length) {
           // console.log(authUser.emailAddress);
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
                                 defaultValue={CourseDetails.title}
                                 onChange= { change }
                             />

                                    <p>By Joe Smith</p>
                            <label htmlFor="courseDescription">Course Description</label>
                            <textarea 
                                id="courseDescription"  
                                name="courseDescription" 
                                defaultValue= {CourseDetails.description}
                                onChange= { change }    
                                />
                             </div>
                         <div>
                             <label htmlFor="estimatedTime">Estimated Time</label>
                             <input
                                 id="estimatedTime" 
                                 name="estimatedTime" 
                                 type="text"
                                 defaultValue={CourseDetails.estimatedTime}
                                 onChange={change} />
                
                             <label htmlFor="materialsNeeded">Materials Needed</label>
                             <textarea 
                             id="materialsNeeded" 
                             name="materialsNeeded"
                             defaultValue={CourseDetails.materialsNeeded} 
                             onChange={change}
                             />
                             
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