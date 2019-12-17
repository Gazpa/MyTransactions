import { INSERT_TRANSACTION } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case INSERT_TRANSACTION:
      let transactions = state.transactions
        ? [...state.transactions, action.payload]
        : [action.payload];
      return { ...state, transactions: transactions };
    default:
      return state;
  }
}
