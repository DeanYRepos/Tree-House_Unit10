import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer, Context } from './Context';

const PrivateRoute = ({component: Component, ...rest}) => {

    return (
        <Consumer>
            { contest => (
                <Route
                {...rest}
                render={props => Context.authenticatedUser ? (
                    <Component {...props}/>
                ) : (
                    <Redirect to={{
                        pathname: '/signin',
                        state: { from: props.location},
                    }}/>
                )}
                />
            )}
        </Consumer>
    );
};

export default PrivateRoute;