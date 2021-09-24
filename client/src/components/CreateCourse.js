import React, {  useState, useEffect, useContext } from 'react';
import { Link, useParams, useHistory} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import  { Context }  from '../Context';
import Header from './Header';
import Form from './Form';

const CreateCourse = () => {

    const context = useContext(Context);
    let history = useHistory();

    const [course, setCourse] = useState({
      title:'',
      description:'',
      EstimatedTime:'',
      materialsNeeded:''
    });
    const [emailAddress, setEmailAddress] = useState()
    const [password, setPassword] = useState()
    const [errors, setErrors] = useState([]);


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
        //  {/* cancel = {cancel}
        //         errors = {errors}
        //         submit = {submit} */ }
                submitButtonText = "Create Course"
                elements= {()=> (
                    <React.Fragment>
                         <label htmlFor="courseTitle">Course Title</label>
                         <input id="courseTitle" name="courseTitle" type="text" value={""} />
                         <p>By Joe Smith</p> {/**add authenticated user */}
                        
                         <label htmlFor="courseDescription">Course Description</label>
                         <textarea id="courseDescription" name="courseDescription" defaultValue={""} />
                        
                         <label htmlFor="estimatedTime">Estimated Time</label>
                         <input id="estimatedTime" name="estimatedTime" type="text" defaultValue />
                        
                         <label htmlFor="materialsNeeded">Materials Needed</label>
                         <textarea id="materialsNeeded" name="materialsNeeded" defaultValue={""} />
                    </React.Fragment>
                )} />
       
          <button className="button" type="submit">Create Course</button><button className="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
      
      </div>
      </main>
        </div>
    )


}

export default CreateCourse;