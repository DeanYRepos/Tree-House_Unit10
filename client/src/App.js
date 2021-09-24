import React, { Component} from 'react';
import {
  
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail'; 
import CreateCourse from './components/CreateCourse';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import withContext from './Context';

const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const CreateCourseWithContext = withContext(CreateCourse);
const UserSignUpWithContext = withContext(UserSignUp)
const UserSignInWithContext = withContext(UserSignIn);

class App extends Component {

  
  render(){
   
    return (
     <Router>
     <div>
       
       <Switch>
         <Route exact path='/' component={CoursesWithContext}/>
         <Route path='/courses/create' component= { CreateCourseWithContext} />
         <Route  path='/courses/:id' component={CourseDetailWithContext}/>
         <Route path='/signin' component={UserSignInWithContext}/>
         <Route path='/signup' component={UserSignUpWithContext}/>

        
         
       </Switch>
     </div>
      </Router>
    );
  }

}



export default App;
