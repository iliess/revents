import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";

/* CREATE AND EXPORT ACTIONS */

/*ActionCreator return an Action*/
export const incrementCounter = () => {
    return {
        type: INCREMENT_COUNTER
    }    
}

/*ActionCreator return an Action*/
export const decrementCounter = () => {
    return {
        type: DECREMENT_COUNTER
    }    
}