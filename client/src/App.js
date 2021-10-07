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
import UserSignOut from './components/UserSignOut'
import UpdateCourse from './components/UpdateCourse';
//import Header from './components/Header';
import PrivateRoute from './PrivateRoute';
import withContext from './Context';

//const HeaderWithContext = withContext(Header);
const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const CreateCourseWithContext = withContext(CreateCourse);
const UserSignUpWithContext = withContext(UserSignUp)
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const UpdateCourseWithContext = withContext(UpdateCourse);

class App extends Component {

  
  render(){
   
    return (
     <Router>
     <div>   
    
       <Switch>
         <Route exact path='/' component={CoursesWithContext}/>
         <Route exact path='/courses/create' component={ CreateCourseWithContext} />
         <Route exact path= '/courses/:id/update' component={ UpdateCourseWithContext} />
         <Route  path='/courses/:id' component={CourseDetailWithContext}/>
         <Route path='/signin' component={UserSignInWithContext}/>
         <Route path='/signup' component={UserSignUpWithContext}/>
         <Route path='/signout' component={UserSignOutWithContext}/>
       </Switch>

     </div>
      </Router>
    );
  }

}



export default App;
