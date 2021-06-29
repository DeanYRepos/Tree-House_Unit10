import React, { Component} from 'react';
import {
  
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Courses from './components/Courses';
import withContext from './Context';

const coursesWithContext = withContext(Courses);

class App extends Component {

  
  render(){
   
    return (
     <Router>
     <div>
       
       <Switch>
         <Route path='/courses' component={coursesWithContext}/>
       </Switch>
     </div>
      </Router>
    );
  }

}



export default App;
