import { combineReducers,createStore } from "redux";
import searchReducer from "./reducers/SearchReducer";


// Kết hợp các reducer

const rootReducer = combineReducers({
  search: searchReducer
});
const store = createStore(rootReducer);

export default store;
