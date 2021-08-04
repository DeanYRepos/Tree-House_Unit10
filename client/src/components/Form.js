import React from 'react';

const Form = (props) => {

    const {
        submit,
        cancel,
        errors,
        submitButtonText,
        elements
        } = props

    function handleSubmit(event) {
        event.preventDefault();
        submit();
      }
    
    function handleCancel(event) {
        event.preventDefault();
        cancel();
      }
    return (
        <form>
        <label htmlFor="emailAddress">Email Address</label>
        <input id="emailAddress" name="emailAddress" type="email" defaultValue />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" defaultValue />
        <button className="button" type="submit">Sign In</button><button className="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
      </form>
    );

    function ErrorsDisplay({ errors }) {
        let errorsDisplay = null;
      
        if (errors.length) {
          errorsDisplay = (
            <div>
              <h2 className="validation--errors--label">Validation errors</h2>
              <div className="validation-errors">
                <ul>
                  {errors.map((error, i) => <li key={i}>{error}</li>)}
                </ul>
              </div>
            </div>
          );
        }
      
        return errorsDisplay;
  }
}