import { userConstants } from '../../constants';


const initialState = {};

export function authentication(state = initialState, action) {

  switch (action.type) {

    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        loginId : action.id,
        user: action.user,
        ...state  
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}