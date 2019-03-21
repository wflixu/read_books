import * as ActionTypes from './actionTypes';

export const increment = (counterCaption) =>{
    return {
        type:ActionTypes.INCREMENT,
        counterCaption:counterCaption
    }
}
export const decrement = (counterCaption)=>{
    return {
        type:ActionTypes.DECREMENT,
        counterCaption:counterCaption
    }
}