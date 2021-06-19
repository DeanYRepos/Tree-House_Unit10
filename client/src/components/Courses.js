import React, {  useState, useEffect } from 'react'; //don't forget to replace Component into curly braces if useState doesn't work out
import { Link } from 'react-router-dom';

// export default class Courses extends Component {

//     state = {
//         courses: []
//     }
// }

export function Courses () {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        

    }, [courses]);


    return(

        <>
         <div class="wrap main--grid">
         <link className="course--module course--link" href={`/courses/${course.id}`} />
            <h2 class="course--label">Course</h2>
            <h3 class="course--title">Build a Basic Bookcase</h3>
            </div>
        </>
    )
}