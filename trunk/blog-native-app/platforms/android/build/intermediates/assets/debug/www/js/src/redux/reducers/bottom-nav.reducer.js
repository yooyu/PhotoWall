import {ACTIVE,UN_ACTIVE} from '../states/bottom-nav.state';
import {GO,BACK} from '../actions/bottom-nav.action';
import {PIC,VIDEO,ACCOUNT,MESSAGE,CAMERA} from '../actions/bottom-nav.action';

export const reducer = (state = UN_ACTIVE, action) => {
  switch (action.type) {
    case GO: return {state:ACTIVE,nav:action.nav};
    case BACK: return {state:ACTIVE,nav:action.nav};
    default: return {state:state,nav:PIC};
  }
};
