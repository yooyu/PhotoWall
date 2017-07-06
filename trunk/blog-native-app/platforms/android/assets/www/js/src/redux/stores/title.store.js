import { createStore } from 'redux';
import { reducer } from '../reducers/title.reducer';

const titleStore = createStore(reducer);

export default titleStore;