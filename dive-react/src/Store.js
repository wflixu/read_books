// import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {createStore} from 'redux';

import reducer from './counters/reducer';

// import {reducer as todoReducer} from './todos';
// import {reducer as filterReducer} from './filter';



// const win = window;

// const reducer = combineReducers({
//   todos: todoReducer,
//   filter: filterReducer
// });

// const middlewares = [];


// const storeEnhancers = compose(
//   applyMiddleware(...middlewares),
//   (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
// );

// const initialState = {
//   todos: [
//     {
//       id: 0,
//       text: 'First',
//       completed: true
//     },
//     {
//       id: 1,
//       text: 'Second',
//       completed: false
//     },
//     {
//       id: 2,
//       text: 'Third',
//       completed: true
//     }
//   ]

// }
const initValues ={
    'first':0,
    'second':10,
    'third':20
}
export default createStore(reducer, initValues);

