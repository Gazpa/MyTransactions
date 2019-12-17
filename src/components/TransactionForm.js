import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { insertTransaction } from "../actions/TransactionsActions";

class TransactionForm extends Component {
  renderField = field => {
    const {
      meta: { touched, error }
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input type={field.type} autoComplete="off" {...field.input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  };

  onSubmit = values => {
    this.props.insertTransaction(values, this.props.delay);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="col-md-6 col-lg-4">
        <h2 className="header">Send Money</h2>
        <form
          className="form-transaction"
          onSubmit={handleSubmit(this.onSubmit)}
        >
          <Field
            label="Name"
            name="name"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Email address"
            name="email"
            type="email"
            component={this.renderField}
          />
          <Field
            label="Amount"
            name="amount"
            type="number"
            component={this.renderField}
          />
          <button id="form_button" type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = "Please enter a name";
  }

  if (!values.email) {
    errors.email = "Please enter an email";
  } else {
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!reg.test(values.email)) errors.email = "Please enter a valid email";
  }

  if (!values.amount) {
    errors.amount = "Please enter an amount";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "TransactionForm"
})(connect(null, { insertTransaction })(TransactionForm));
