import React, {  useState, useEffect, useContext } from 'react'; //don't forget to replace Component into curly braces if useState doesn't work out
import { Link } from 'react-router-dom';
import  { CoursesContext }  from '../Context';




  const Courses = () => {
    const  coursesContext = useContext(CoursesContext);
    
    const [courses, setCourses] = useState([]);
    
     
    //console.log(getCourses);
   
    useEffect(() => {
        
        coursesContext.data.getCourses()
        .then(courses =>
        setCourses(courses))
        .catch(err => err.history.push('./error') );

    }, [courses, coursesContext]);

    const courseList = courses.map(course => { 
        return(
      
           <Link className="course--module course--link" href={`/courses/${course.id}`} >
           <h2 className="course--label">Course</h2>
           <h3 className="course--title">{course.title}</h3>
           </Link>
      
    )});
    
    return(
        <div id="root">
            <header>
       
        
       
            <div className="wrap header--flex">
            <h1 className="header--logo"><a href="index.html">Courses</a></h1>
            <nav>
                <ul className="header--signedout">
                <li><a href="sign-up.html">Sign Up</a></li>
                <li><a href="sign-in.html">Sign In</a></li>
                </ul>
            </nav>
           
        </div>
            </header>
         <main>
             <div className="wrap main--grid">
                {courseList}
                <Link className="course--module course--add--module" href="create-course.html">
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