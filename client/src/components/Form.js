import React from 'react';
import { Link } from 'react-router-dom';

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
     <div>
        <ErrorsDisplay errors={errors}/>
        <form onSubmit={handleSubmit}> 
         {elements()}
            <button className="button" type="submit">{submitButtonText}</button>
            <button className="button button-secondary" onclick={handleCancel}>Cancel</button>
            <p>Don't have a user account? Click here to <Link to="/signup">sign up</Link>!</p>
         </form>
      </div>
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
export default Form;