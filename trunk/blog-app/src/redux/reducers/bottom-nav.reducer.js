import {PIC,VIDEO,ACCOUNT,MESSAGE,CAMERA} from '../states/bottom-nav.state';

export const reducer = (state = MESSAGE, action) => {
  switch (action.type) {
    case MESSAGE: return MESSAGE;
    case PIC: return PIC;
    case VIDEO: return VIDEO;
    case ACCOUNT: return ACCOUNT;
    case CAMERA: return CAMERA;
    default: return state;
  }
};
