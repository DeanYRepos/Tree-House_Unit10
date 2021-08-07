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
     <div>
        <ErrorsDisplay errors={errors}/>
        <form onSubmit= {handleSubmit}> 
         { elements() }
            <button className="button" type="submit">{submitButtonText}</button>
            <button className="button button-secondary" onclick={handleCancel}>Cancel</button>
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