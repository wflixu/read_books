import { createReducer, on, Action } from '@ngrx/store';
import { User, Auth } from './entities';

import {
  login,
  loginOut,
  sign,
} from './auth.actions';

const _authReducer = createReducer(
  {
    hasError: true,
  },
  on(login, (state: Auth, { auth }) => {
    return Object.assign({...state, ...auth}, { hasError: false });
  })
);

export function authReducer(state, action) {
  return _authReducer(state, action);
}
