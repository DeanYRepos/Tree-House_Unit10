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
import Header from './components/Header';
import PrivateRoute from './PrivateRoute';
import UnhandledError from './components/UnhandledError';
import NotFound from './components/NotFound';
import Forbidden from './components/Forbidden';
import withContext from './Context';

const HeaderWithContext = withContext(Header);
const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const CreateCourseWithContext = withContext(CreateCourse);
const UserSignUpWithContext = withContext(UserSignUp)
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const UpdateCourseWithContext = withContext(UpdateCourse);
// const ErrorWithContext = withContext(Error);
// const NotFoundWithContext = withContext(NotFound);
// const ForbiddenWithContext = withContext(Forbidden);

class App extends Component {

  
  render(){
   
    return (
     <Router>
     <div>   
      <HeaderWithContext/>
       <Switch>
         <Route exact path='/' component={CoursesWithContext}/>
         <PrivateRoute path='/courses/create' component={ CreateCourseWithContext} />
         <PrivateRoute path= '/courses/:id/update' component={ UpdateCourseWithContext} />
         <Route path='/courses/:id' component={CourseDetailWithContext}/>
         <Route path='/signin' component={UserSignInWithContext}/>
         <Route path='/signup' component={UserSignUpWithContext}/>
         <Route path='/signout' component={UserSignOutWithContext}/>
         <Route component={NotFound} />
         <Route path='/forbidden' component={Forbidden}/>
         <Route path='/error' component={UnhandledError}/>
       </Switch>
     </div>
      </Router>
    );
  }

}



export default App;
