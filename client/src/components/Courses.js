import React, {  useState, useEffect, useContext } from 'react'; //don't forget to replace Component into curly braces if useState doesn't work out
import { Link } from 'react-router-dom';
import  { Context }  from '../Context';
import Header from './Header';




  const Courses = () => {
    const  context = useContext(Context);
    
    const [courses, setCourses] = useState([]);
    
     
    //console.log(getCourses);
   
    useEffect(() => {
        
        context.data.getCourses()
        .then(courses =>
        setCourses(courses))
        .catch(err => err.history.push('./error') );

    }, [courses, context]);

    const courseList = courses.map(course => { 
        return(
      
           <Link className="course--module course--link" to ={`/courses/${course.id}`} key={course.id}>
           <h2 className="course--label">Course</h2>
           <h3 className="course--title">{course.title}</h3>
           </Link>
      
    )});
    
    return(
        <div id="root">
         <Header/>
         <main>
             <div className="wrap main--grid">
                {courseList}
                <Link className="course--module course--add--module" to="create-course.html">
                <span className="course--add--title">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 13 13" className="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 " /></svg>
                 New Course
                 </span>
                </Link>
            </div>
         </main>
        </div>
      
    )
}
export default Courses;