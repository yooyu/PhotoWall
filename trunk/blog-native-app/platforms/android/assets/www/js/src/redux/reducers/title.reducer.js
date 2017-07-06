import {SHOW,HIDDEN} from '../states/title.state';
import {CHANGE,UN_CHANGE} from '../actions/title.action';

export const reducer = (state = HIDDEN, action) => {
  switch (action.type) {
    case CHANGE: return {state:SHOW,title:action.title};
    case UN_CHANGE: return {state:SHOW,title:'picture'};
    default: return {state:SHOW,title:'picture'};
  }
};
