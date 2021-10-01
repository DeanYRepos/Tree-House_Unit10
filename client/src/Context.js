//Set up context

import React, { Component } from 'react';
import Data from './Data';
import Cookies from 'js-cookie';

export const Context = React.createContext();

export class Provider extends Component{

    state = {
        authenticatedUser:  null  // Cookies.getJSON('authenticatedUser') ||
    };

    constructor(){
        super();
        this.data = new Data();
    }
    render(){
    
    const { authenticatedUser } = this.state;
    const value = {
        authenticatedUser,
        data: this.data,
        actions: {
            signIn: this.signIn
        }
    };
        
    return(
        <Context.Provider value={value}>
        {this.props.children}
        </Context.Provider>
    );
    }
    signIn = async (emailAddress, password) => {
        const user = await this.data.getUser(emailAddress, password);
        if(user !== null ) {
            this.setState(() => {
                return {
                    authenticatedUser: user,
                };
            });
            Cookies.set('authenticatedUser', JSON.stringify(user),{expires: 1});
        }
        return user;

    }
}
        export const Consumer = Context.Consumer;
        /**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */
    export default function withContext(Component) {
        return function ContextComponent(props) {
            return(
                <Context.Consumer>
                    {context => <Component {...props} context={context} />}
                </Context.Consumer>
               );
            }
        }
    
    


 