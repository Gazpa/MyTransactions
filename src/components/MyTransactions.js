import React from "react";

import { numberWithCommas } from "../utils/services";

const MyTransactions = props => {
  return (
    <div className="row">
      <div className="col-12">
        <h5 className="header">Transactions</h5>
      </div>

      {props.transactions
        ? props.transactions.map((tran, i) => {
            return (
              <div
                className="col-12 my-transactions-transaction"
                key={`transactionBlock${i}`}
              >
                <div className="row">
                  <div className="col-8">
                    <span className="my-transactions-name">{tran.name}</span>
                    <span className="my-transactions-email">{tran.email}</span>
                  </div>
                  <div className="col-4">
                    <span className="my-transactions-amount">{`£ ${numberWithCommas(
                      tran.amount
                    )}`}</span>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default MyTransactions;
