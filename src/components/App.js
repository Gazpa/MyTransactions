import React, { Component } from "react";
import { connect } from "react-redux";

import TransactionForm from "./TransactionForm";
import AccountDetails from "./AccountDetails";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialTotal: 15000,
      APIDelay: 1000
    };
  }

  render() {
    return (
      <div className="container-fluid App">
        <div className="row justify-content-md-center">
          <TransactionForm delay={this.state.APIDelay} />
          <AccountDetails
            transactions={this.props.transactions}
            total={this.state.initialTotal}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { transactions: state.transactions.transactions };
}

export default connect(mapStateToProps, null)(App);
