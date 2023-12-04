import { combineReducers,createStore } from "redux";
import searchReducer from "./reducers/SearchReducer";
import lessonReducer from "./reducers/LessonReducer";


// Kết hợp các reducer

const rootReducer = combineReducers({
  search: searchReducer,
  lesson: lessonReducer,
});
const store = createStore(rootReducer);

export default store;
