import { createStore } from 'redux';
import { reducer } from '../reducers/screen.reducer';

const screenStore =createStore(reducer);

export default screenStore;
