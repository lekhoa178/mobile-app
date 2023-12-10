import { combineReducers,createStore } from "redux";
import searchReducer from "./reducers/SearchReducer";
import lessonReducer from "./reducers/LessonReducer";
import accountReducer from "./reducers/AccountReducer";
import notebookReducer from "./reducers/NotebookReducer";
import researchReducer from "./reducers/ResearchReducer";


// Kết hợp các reducer

const rootReducer = combineReducers({
  search: searchReducer,
  lesson: lessonReducer,
  account: accountReducer,
  notebook: notebookReducer,
  research: researchReducer
});
const store = createStore(rootReducer);

export default store;
