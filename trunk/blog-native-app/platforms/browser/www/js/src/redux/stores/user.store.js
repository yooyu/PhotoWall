import { createStore } from 'redux';
import { reducer } from '../reducers/user.reducer';

export const userStore = createStore(reducer);