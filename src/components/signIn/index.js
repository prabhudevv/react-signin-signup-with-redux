import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn } from '../../store/actions/user.action'
import { alertConstants } from '../../constants/alert.constants'

const SignIn = () => {

  const users = useSelector(state => state.registration.users);
  const loginId = useSelector(state => state.authentication.loginId);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandleChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandleChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = false;
    if (email && password) {
      users.forEach((element, i) => {
        if (element.email === email && element.password === password) {
          dispatch(signIn({ email, password }, i))
          toast.success(alertConstants.SUCCESS, {
            position: "bottom-right",
            autoClose: 2000
          });

          flag = true;
          return;
        }
      });
      if (!flag) {
        toast.error(alertConstants.ERROR, {
          position: "bottom-right",
          autoClose: 2000
        });
        document.getElementById("create-login-form").reset();
      }
    }
  }

  if (loginId !== undefined) return <Redirect to='/dashboard' />

  let SignInRender = <div className="container">
    <form className="white" onSubmit={handleSubmit} id="create-login-form">
      <h5 className="grey-text text-darken-3">Sign In</h5>
      <div className="input-field">
        <label htmlFor="email">Email</label>
        <input type="email" id='email' onChange={emailHandleChange} />
      </div>
      <div className="input-field">
        <label htmlFor="password">Password</label>
        <input type="password" id='password' onChange={passwordHandleChange} />
      </div>
      <div className="input-field">
        <button className="btn pink lighten-1 z-depth-0">Login</button>
      </div>
    </form>
  </div>;

  return SignInRender;

}

export default SignIn;