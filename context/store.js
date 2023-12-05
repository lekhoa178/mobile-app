import { combineReducers,createStore } from "redux";
import searchReducer from "./reducers/SearchReducer";
import lessonReducer from "./reducers/LessonReducer";
import accountReducer from "./reducers/AccountReducer";


// Kết hợp các reducer

const rootReducer = combineReducers({
  search: searchReducer,
  lesson: lessonReducer,
  account: accountReducer
});
const store = createStore(rootReducer);

export default store;
