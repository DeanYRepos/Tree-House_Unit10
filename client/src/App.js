import React, { Component} from 'react';
import {
  
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail'; 
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import withContext from './Context';

const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const UserSignUpWithContext = withContext(UserSignUp)
const UserSignInWithContext = withContext(UserSignIn);

class App extends Component {

  
  render(){
   
    return (
     <Router>
     <div>
       
       <Switch>
         <Route exact path='/' component={CoursesWithContext}/>
         <Route path='/signup' component={UserSignUpWithContext}/>
         <Route path='/signin' component={UserSignInWithContext}/>
         <Route  path='/courses/:id' component={CourseDetailWithContext}/>
       </Switch>
     </div>
      </Router>
    );
  }

}



export default App;
