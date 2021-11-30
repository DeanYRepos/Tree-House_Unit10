import React, {  useState, useEffect, useContext } from 'react';
import  { Context }  from '../Context';
import { useHistory, useParams } from 'react-router-dom';
import Form from './Form';



const UpdateCourse = () => {

    const context = useContext(Context);
    let history = useHistory();
    const { id } = useParams();
    const authUser = context.authenticatedUser;
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [estimatedTime, setEstimatedTime] = useState();
    const [materialsNeeded, setMaterialsNeeded] = useState();
    const [userId,   ] = useState(context.authenticatedUser.userId);
    const [errors, setErrors] = useState([]);
    const [CourseDetails, setCourseDetails] = useState('');


     
     
    useEffect(() => {

        context.data.getCourse(id)
        .then(CourseDetails => {
            setCourseDetails(CourseDetails)
          
        })
        .catch(err => history.push('./error') );

    }, [context.data, history, id])
   
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
        context.data.updateCourse(courseDetails, id, authUser.emailAddress, authUser.password)
        .then( errors => {
          console.log(courseDetails.title);
          if(errors.length) {
            setErrors(errors)
          
          } 
           else {
            console.log("Course was successfully updated!");
           // console.log(response);
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

                                    <p>By {authUser.firstName} {authUser.lastName}</p>
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