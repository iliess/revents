import { combineReducers } from "redux";
import testReducer from "../../features/testarea/testReducer";

//Here we simplify the reducer name, calling test instead of testReducer.
const rootReducer = combineReducers({
    test: testReducer
})

export default rootReducer;