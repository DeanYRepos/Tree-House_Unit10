//Set up context

import React, { Component } from 'react';
import Data from './Data';
import Cookies from 'js-cookie';

export const CoursesContext = React.createContext();

export class Provider extends Component{

    // state= {
    //     authenticatedUser: Cookies.getJSON('authenticatedUser') || null
    // };

    constructor(){
        super();
        this.data = new Data();
    }
    render(){
    
    const value = {
        data: this.data,
    }
        
    return(
        <CoursesContext.Provider value={value}>
        {this.props.children}
        </CoursesContext.Provider>
    );
    }
}
        export const Consumer = CoursesContext.Consumer;
        /**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */
    export default function withContext(Component) {
        return function ContextComponent(props) {
            return(
                <CoursesContext.Consumer>
                    {context => <Component {...props} context={context} />}
                </CoursesContext.Consumer>
               );
            }
        }
    
    


 