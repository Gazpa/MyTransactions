import React from "react";

import MyAccount from "./MyAccount";
import MyTransactions from "./MyTransactions";

const AccountDetails = props => {
  let sumTransactionsAmounts = 0;

  if (props.transactions) {
    if (props.transactions.length === 1) {
      sumTransactionsAmounts = parseInt(props.transactions[0].amount);
    } else {
      sumTransactionsAmounts = props.transactions.reduce((acc, val) => {
        let accumulator = acc && acc.amount ? parseInt(acc.amount, 10) : 0;
        let value = val && val.amount ? parseInt(val.amount, 10) : 0;

        return { amount: accumulator + value };
      });

      sumTransactionsAmounts = sumTransactionsAmounts.amount;
    }
  }

  return (
    <div className="col-md-6 col-lg-4">
      <MyAccount sumAmounts={sumTransactionsAmounts} total={props.total} />
      <MyTransactions transactions={props.transactions} />
    </div>
  );
};

export default AccountDetails;
