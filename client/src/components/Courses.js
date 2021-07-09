import React, {  useState, useEffect, useContext } from 'react'; //don't forget to replace Component into curly braces if useState doesn't work out
import { Link } from 'react-router-dom';
import  { CoursesContext }  from '../Context';




  const Courses = () => {
    const { coursesContext  } = useContext(CoursesContext);
    const [courses, setCourses] = useState([]);
    const getCourses = coursesContext.data.getCourses()
    useEffect(() => {
        console.log(coursesContext);
        getCourses
        .then(courses => setCourses({courses}))
        .catch(err => err.history.push('./error') );

    }, [courses, getCourses,coursesContext]);

    const courseList = getCourses.map(course => { 
        return(
        
       
           <Link className="course--module course--link" href={`/courses/${course.id}`} >
           <h2 className="course--label">Courses</h2>
           <h3 className="course--title">{course.title}</h3>
           </Link>
      
    )});
      
    return(
      
        <div className="wrap main--grid">
        {courseList}
        {/* <Link className="course--module course--add--module" href={`/courses/${course.id}`}>


        </Link> */}

        </div>
     
      
    )
}
export default Courses;