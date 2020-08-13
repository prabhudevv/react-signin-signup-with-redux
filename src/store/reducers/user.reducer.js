import { userConstants } from '../../constants';


const initState = {
  users: [],
}


export function registration(state = initState, action) {

  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        registering: true,
      }
    case userConstants.REGISTER_SUCCESS:
      return {
        registering: true,
        ...state,
         users : state.users.concat(action.users)
      }
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}