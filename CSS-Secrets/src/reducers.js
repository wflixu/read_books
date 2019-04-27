import {  combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';

// import {reducer as todoReducer} from './todos';
// import {reducer as filterReducer} from './filter';
// import countersReducer from './counters/reducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    // todos: todoReducer,
    // filter: filterReducer,
    // counters:countersReducer
  });