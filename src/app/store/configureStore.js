import {createStore} from "redux";
import {devToolsEnhancer} from 'redux-devtools-extension';
import rootReducer from "../reducers/routeReducer";

export const configureStore = () => {
    const store = createStore(rootReducer, devToolsEnhancer())

    return store;
}