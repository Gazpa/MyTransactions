import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import transactionsReducer from "./transactions_reducer";

const rootReducer = combineReducers({
  form: formReducer,
  transactions: transactionsReducer
});

export default rootReducer;
