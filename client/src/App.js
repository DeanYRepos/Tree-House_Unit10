import React, { Component} from 'react';
import {
  
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Courses from './components/Courses';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import withContext from './Context';

const coursesWithContext = withContext(Courses);
const UserSignUpWithContext = withContext(UserSignUp)
const UserSignInWithContext = withContext(UserSignIn);

class App extends Component {

  
  render(){
   
    return (
     <Router>
     <div>
       
       <Switch>
         <Route exact path='/' component={coursesWithContext}/>
         <Route path='/signup' component={UserSignUpWithContext}/>
         <Route path='/signin' component={UserSignInWithContext}/>
       </Switch>
     </div>
      </Router>
    );
  }

}



export default App;
