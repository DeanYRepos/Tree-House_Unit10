import React, { Component } from 'react';
import {
  
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {

  
  render(){
    return (
     <Router>
     <div>
       <Route to= "/courses"/>
     </div>
      </Router>
    );
  }

}



export default App;