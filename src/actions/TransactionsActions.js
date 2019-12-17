import { reset } from "redux-form";

import { INSERT_TRANSACTION } from "./types";

export function insertTransaction(transaction, delay) {
  return function(dispatch) {
    let APICall = new Promise((resolve, reject) => {
      try {
        setTimeout(() => resolve({ data: transaction }), delay);
      } catch {
        reject("Error inserting");
      }
    });

    APICall.then(response => {
      dispatch({
        type: INSERT_TRANSACTION,
        payload: response.data
      });
      dispatch(reset("TransactionForm"));
    }).catch(err => console.log(err));
  };
}
