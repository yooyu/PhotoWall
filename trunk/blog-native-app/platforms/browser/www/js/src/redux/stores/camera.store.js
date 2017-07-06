import { createStore } from 'redux';
import { reducer } from '../reducers/camera.reducer';

const cameraStore = createStore(reducer);

export default cameraStore;