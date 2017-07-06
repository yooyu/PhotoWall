import { createStore } from 'redux';
import { reducer } from '../reducers/bottom-nav.reducer';

const bottomNavStore =createStore(reducer);

export default bottomNavStore;
