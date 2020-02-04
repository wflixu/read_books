import { createAction, props } from '@ngrx/store';
import { User, Auth} from './entities';

export const login = createAction('LOGIN', props<{ auth: Auth }>());
export const loginOut = createAction('LOGIN_OUT');
export const sign = createAction('SIGN', props<{ user: User }>());

