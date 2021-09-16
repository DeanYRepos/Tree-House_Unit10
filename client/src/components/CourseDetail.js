import React, {  useState, useEffect, useContext } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import  { Context }  from '../Context';
import Header from './Header';

const CourseDetail = ()=> {

    const history = useHistory();
    const { id } = useParams();
    const  context = useContext(Context);
    const [CourseDetails, setCourseDetails] = useState();

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
            <Header/>
            <main>
            <div className="actions--bar">
                <div className="wrap">
                    <Link className="button" to="updatecourse.html">Update Course</Link>
                    <Link className="button" to="#">Delete Course</Link>
                    <Link className="button button-secondary" to="index.html">Return to List</Link>
                </div>
            </div>
            <div className="wrap">
              <h2>Course Detail</h2>
              <form>
                  <div className="main--flex">
                    <div>
                    <h3 className="course--detail--title">Course</h3>
                    <h4 className="course--name">{CourseDetails.title}</h4>
                    </div>
                    <div>
                    <h3 className="course--detail--title">Estimated Time</h3>
                    <p>Time</p>

                    <h3 className="course--detail--title">Materials Needed</h3>
                    <ul className="course--detail--list">

                    </ul>
                            </div>

                         </div>
                     </form>
                 </div>
            </main>
        </div>
    )
}
 
export default CourseDetail;