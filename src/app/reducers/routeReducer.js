import { combineReducers } from "redux";
import testReducer from "../../features/testarea/testReducer";
import eventReducer from "../../features/event/eventReducer";

//Here we simplify the reducer name, calling test instead of testReducer.
const rootReducer = combineReducers({
    test: testReducer,
    events: eventReducer
})

export default rootReducer;