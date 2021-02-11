import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import formFields from "./formFields";
import * as actions from "../../actions";
import { withRouter } from "react-router";
const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, lable }) => {
    return (
      <div key={name}>
        <label>{lable}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <div style={{ marginLeft: "2%" }}>
      <h5>Please confirm your enteries</h5>
      {reviewFields}
      <button
        className="yellow dark-3 white-text btn-flat"
        style={{ marginTop: "2%" }}
        onClick={onCancel}
      >
        Back
        <i className="material-icons left">arrow_back</i>
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="blue btn-flat right white-text"
        style={{ marginRight: "2%", marginTop: "2%" }}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};
function mapStateToProps(state) {
  return { formValues: state.form.SurveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
