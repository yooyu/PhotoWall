import {LOGIN,LOGOUT} from '../states/user.state';

export const reducer = (state = LOGOUT, action) => {
  switch (action.type) {
    case LOGIN: return LOGIN;
    case LOGOUT: return LOGOUT;
    default: return state;
  }
};
