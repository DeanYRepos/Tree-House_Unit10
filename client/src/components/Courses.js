import React, {  useState, useEffect, useContext } from 'react'; //don't forget to replace Component into curly braces if useState doesn't work out
import { Link } from 'react-router-dom';
import  { Context } from '../Context';




  const Courses = () => {
    const { context }  = useContext(Context);
    const [courses, setCourses] = useState([]);
   const getCourses = context.getCourses()
    useEffect(() => {
        getCourses
        .then(courses => setCourses({courses}))
        .catch(err => err.history.push('./error') );

    }, [courses, getCourses]);

    const courseList = context.getCourses().map(course => {
        return(
        <>
       
           <Link className="course--module course--link" href={`/courses/${course.id}`} />
           <h2 class="course--label">Courses</h2>
           <h3 class="course--title">{course.title}</h3>
          
       </>
    )});
      
    return(
      
        <div class="wrap main--grid">
        {courseList}

        </div>
     
      
    )
}
export default Courses;