import * as ActionTypes from './actionTypes';

export default (state = {} , action) => {
    console.log(state);
    const { counterCaption } = action;
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return { ...state, [counterCaption]: state[counterCaption] + 1 }
        case ActionTypes.DECREMENT:
            return { ...state, [counterCaption]: state[counterCaption] - 1 }
        default:
            return state;
    }
}