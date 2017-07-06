import {UNPHOTOGRAPH,PHOTOGRAPH} from '../states/camera.state';

export const reducer = (state = UNPHOTOGRAPH, action) => {
  switch (action.type) {
    case PHOTOGRAPH: return {state:PHOTOGRAPH,img:action.img};
    case UNPHOTOGRAPH: return {state:UNPHOTOGRAPH,img:null};
    default: return {state:UNPHOTOGRAPH,img:null};
  }
};
