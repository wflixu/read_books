
import { createReducer, on, Action } from '@ngrx/store';
import { Todo } from '../../core/entities';
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  TOGGLE_ALL,
  CLEAR_COMPLETED,
  FETCH_FROM_API,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from './todo.action';

const _todoReducer = createReducer([],
  on(ADD_TODO, (state,{todo}) => {
    return [
      ...state,
      todo
    ];
  }),
  on(REMOVE_TODO, (state,{todo}) => {
    return state.filter((item:Todo)=>{
      return item.objectId !== todo.objectId;
    });
  }),
  on(TOGGLE_TODO, (state,{todo}) => {
    return state.map((item:Todo)=>{
      return item.objectId !== todo.objectId? item:todo;
    });
  }),
  on(FETCH_FROM_API, (state,{todos}) => {
    return [
      ...todos
    ];
  })
  )


  export function todoReducer(state, action) {
    return _todoReducer(state, action);
  }
  // export function todoFilterReducer(state, action) {
  //   return _todoFilterReducer(state, action);
  // }



// export const todoReducer = (state: Todo[] = [], action: Action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return [
//         ...state,
//         action.payload
//       ];
//     case REMOVE_TODO:
//       return state.filter(todo => todo.id !== action.payload.id);
//     case TOGGLE_TODO:
//       return state.map(todo => {
//         if (todo.id !== action.payload.id) {
//           return todo;
//         }
//         return Object.assign({}, todo, { completed: !todo.completed });
//       });
//     case TOGGLE_ALL:
//       return state.map(todo => {
//         return Object.assign({}, todo, { completed: !todo.completed });
//       });
//     case CLEAR_COMPLETED:
//       return state.filter(todo => !todo.completed);
//     case FETCH_FROM_API:
//       return [
//         ...action.payload
//       ];
//     default:
//       return state;
//   }
// }

export const todoFilterReducer = (state = (todo: Todo) => todo, action: Action) => {
  switch (action.type) {
    case SHOW_ALL:
      return todo => todo;
    case SHOW_ACTIVE:
      return todo => !todo.completed;
    case SHOW_COMPLETED:
      return todo => todo.completed;
    default:
      return state;
  }
}
