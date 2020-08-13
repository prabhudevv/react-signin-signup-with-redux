import { userConstants } from "../../constants";


export const signIn = (credentials,id) => {

  return (dispatch, getState) => {
  
      dispatch({ type: userConstants.LOGIN_SUCCESS ,credentials,id});

  }
}

export const signOut = () => {
  
  return (dispatch, getState) => {
    console.log('signout',getState)
      dispatch({ type: userConstants.LOGOUT })
 
  }
}

export const signUp = (users) => {
  console.log(users)
  return (dispatch, getState) => {
      dispatch({ type: userConstants.REGISTER_SUCCESS ,users});
    
  }
}

