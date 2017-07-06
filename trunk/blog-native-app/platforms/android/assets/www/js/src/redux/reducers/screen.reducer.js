import {SHOW,HIDDEN} from '../states/screen.state';
import {OPEN,CLOSE} from '../actions/screen.action';

export const reducer = (state = SHOW, action) => {
  switch (action.type) {
    case OPEN: return {state:SHOW};
    case CLOSE: return {state:HIDDEN};
    default: return {state:state};
  }
};
