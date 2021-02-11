//SurveyForm shows a form for user to add input
import _ from "lodash";
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import SurveyField from "./SurveyField";
import {Link} from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {


  renderFields() {
    return _.map(formFields, ({ lable, name }) => {
      return (
        <Field
          key={name}
          type="text"
          component={SurveyField}
          lable={lable}
          name={name}
          
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form 
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          {this.renderFields()}
          <Link to="/surveys" className="red btn red white-text" style={{marginLeft:'2%'}}>
          Cancel
          <i className="small material-icons left">close</i>
          </Link>
          <button type="submit" className=" btn right white-text blue" style={{marginRight:'2%'}}>
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}
function validate(values){
    const errors={};
    errors.recipients=validateEmails(values.recipients || ''); 

    _.each(formFields,({name,noValueError})=>{
        if(!values[name]){
            errors[name]=noValueError;
        }
    });
    // if(!values.title){
    //     errors.title="You must provide a title"
    // }
    // if(!values.subject){
    //     errors.title="You must provide a subject"
    // }
    // if(!values.body){
    //     errors.title="You must provide a body"
    // }
    

    return errors;

}

export default reduxForm({
  validate,
  form: 'SurveyForm',
  destroyOnUnmount:false 
})(SurveyForm);
