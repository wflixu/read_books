import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/core/entities';

export const ADD_TODO = createAction('ADD_TODO', props<{ todo: Todo }>());
export const REMOVE_TODO = createAction('REMOVE_TODO',props<{ todo: Todo }>());
export const TOGGLE_TODO = createAction('TOGGLE_TODO',props<{ todo: Todo }>());
export const TOGGLE_ALL = createAction('TOGGLE_ALL');
export const CLEAR_COMPLETED = createAction('CLEAR_COMPLETED');
export const FETCH_FROM_API = createAction('FETCH_FROM_API', props<{ todos: Todo[] }>());
export const SHOW_ALL = 'ALL';
export const SHOW_COMPLETED = 'COMPLETED';
export const SHOW_ACTIVE = 'ACTIVE';

