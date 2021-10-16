import React, {  useState, useEffect, useContext } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import  { Context }  from '../Context';


const CourseDetail = ()=> {

    const history = useHistory();
    const { id } = useParams();
    const  context = useContext(Context);
    const [CourseDetails, setCourseDetails] = useState('');


    useEffect(() => {

        context.data.getCourse(id)
        .then(CourseDetails => {
            setCourseDetails(CourseDetails)
            console.log(CourseDetails);
        })
        .catch(err => history.push('./error') );

    }, [context.data, history, id])


   
    return(
        <div id='root'>
         
            <main>
            <div className="actions--bar">
                <div className="wrap">
                    <Link className="button" to={`/courses/${CourseDetails.id}/update`}>Update Course</Link> {/** Update route when updateCourse/deleteCourse components are created */}
                    <Link className="button" to="#">Delete Course</Link>
                    <Link className="button button-secondary" to="/">Return to List</Link>
                </div>
            </div>
            <div className="wrap">
              <h2>Course Detail</h2>
              <form>
                  <div className="main--flex">
                    <div>
                    <h3 className="course--detail--title">Course</h3>
                    <h4 className="course--name">{CourseDetails.title}</h4>
                        <p> {CourseDetails.description} </p>
                    </div>

                    <div>
                    <h3 className="course--detail--title">Estimated Time</h3>
                    <p>{CourseDetails.estimatedTime}</p>

                    <h3 className="course--detail--title">Materials Needed</h3>
                        <ReactMarkdown>
                       
                        { CourseDetails.materialsNeeded }
                        
                        </ReactMarkdown>  
                            </div>
                    
                         </div>
                     </form>
                 </div>
            </main>
        </div>
    )
}
 
export default CourseDetail;