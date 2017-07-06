import {UNPHOTOGRAPH,PHOTOGRAPH} from '../states/camera.state';
import {GO,BACK} from '../actions/camera.action';

export const reducer = (state = UNPHOTOGRAPH, action) => {
  switch (action.type) {
    case GO: return {state:PHOTOGRAPH,img:action.img};
    case BACK: return {state:UNPHOTOGRAPH,img:null};
    default: return {state:UNPHOTOGRAPH,img:null};
  }
};
