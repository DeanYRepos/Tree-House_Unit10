import React, {  useState, useEffect, useContext } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import  { Context }  from '../Context';


const CourseDetail = ()=> {

    const history = useHistory();
    const { id } = useParams();
    const  context = useContext(Context);
    const authUser = context.authenticatedUser;
    const [CourseDetails, setCourseDetails] = useState('');
    const [User, setUser] = useState('');
    //const [errors, setErrors] = useState([]);
   // console.log(authUser.emailAddress);
    useEffect(() => {

        context.data.getCourse(id)
        .then(CourseDetails => {
            setCourseDetails(CourseDetails)
            console.log(CourseDetails.User);
            setUser(CourseDetails.User);
          
        })
        .catch(err => history.push('./error') );

    }, [context.data, history, id])
    
    const handleDelete = () => {
        context.data.deleteCourse(id, authUser.emailAddress, authUser.password )
        .then(response => {
            console.log(response);
           
            if([]){
                console.log("Course was deleted successfully!");
                history.push('/');

            } else if (response.status === 403) {
                history.push('/error');
            } else if (response.status === 404) {
                history.push('/error');
            } else if (response.status === 500) {
                history.push('/error');
            } else {
                throw new Error();
            }

        }) 
        .catch(err => {
            console.log(err);
            history.push('/error');
        })
    };

   
    return(
        <div id='root'>
         
            <main>
            <div className="actions--bar">
                <div className="wrap">
                { authUser && CourseDetails.userId === authUser.userId ? ( 
                    <React.Fragment>
                    <Link className="button" to={`/courses/${CourseDetails.id}/update`}>Update Course</Link> {/**Removes and adds update/delete buttons based on user */}
                    <button className="button" onClick={handleDelete} >Delete Course</button>
                    <Link className="button button-secondary" to="/">Return to List</Link> 
                    </React.Fragment>
                    ) :(
                    <Link className="button button-secondary" to="/">Return to List</Link>
                    )
                }
                    
                </div>
            </div>
            <div className="wrap">
              <h2>Course Detail</h2>
              <form>
                  <div className="main--flex">
                    <div>
                    <h3 className="course--detail--title">Course</h3>
                    <h4 className="course--name">{CourseDetails.title}</h4>
                    <p> By {User.firstName} {User.lastName}</p>
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