import React, {  useState, useEffect, useContext } from 'react';
import  { Context }  from '../Context';
import { useHistory, useParams } from 'react-router-dom';
import Form from './Form';


// Stateful function component that updates values and state of courses
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
    
  

     
     // side effect hook calls and sets state of course details and handles errors routes
    useEffect(() => {

        context.data.getCourse(id)
        .then(CourseDetails => {
         // console.log(CourseDetails.userId);
         // console.log(response.status);
         // console.log(CourseDetails.userId)
         if(!CourseDetails.id) {
          
          history.push('/notfound')
        } 

         else if (authUser.userId !== CourseDetails.userId) {

          history.push('/forbidden');
        
        }
       
          else {
          
          setCourseDetails(CourseDetails)
     
        } 
        
        
        
        })
        .catch(err => history.push('/error') );

    }, [context.data, history, id, authUser.id, authUser.userId, userId ])
   
    // Change function that updates elements values on change event
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
      // Submit function that updates course associated with authenticated user and handles errors redirects 
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
            history.push('/')
        
          }
        })
        .catch(err => {
          console.log(err);
          history.push('/error');
        });
       
      }
      // Cancel function routes back to course detail component when button is clicked
      const cancel = () =>{
        history.push(`/courses/${CourseDetails.id}`);
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
                                 onInput= { change }
                             />

                                    <p>By {authUser.firstName} {authUser.lastName}</p>
                            <label htmlFor="courseDescription">Course Description</label>
                            <textarea 
                                id="courseDescription"  
                                name="courseDescription" 
                                defaultValue= {CourseDetails.description}
                                onInput= { change }    
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