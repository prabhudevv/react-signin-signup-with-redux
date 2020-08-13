import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signUp } from '../../store/actions/user.action';
import { alertConstants } from '../../constants/alert.constants'

let isSubmit = false;

const SignUp = () => {

  const users = useSelector(state => state.registration.users);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const emailHandleChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandleChange = (event) => {
    setPassword(event.target.value);
  };

  const firstNameHandleChange = (event) => {
    setfirstName(event.target.value);
  };

  const lastNameHandleChange = (event) => {
    setlastName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isEmailAlreadyExists = false;
    const registerUser = users;
    const user = {
      email,
      password,
      firstName,
      lastName
    };
    if (user.firstName && user.lastName && user.email && user.password) {
      //checking whether email already exists or not
      registerUser.forEach(element => {
        if (element.email === user.email) {
          isEmailAlreadyExists = true;
          return;
        }
      });
      if (!isEmailAlreadyExists) {
        isSubmit = true;
        dispatch(signUp(user));
      } else {
        toast.info(alertConstants.REGISTERED, {
          position: "bottom-right",
          autoClose: 2000
        });
        document.getElementById("create-signup-form").reset();
      }
    }
  }

  if (isSubmit && users) return <Redirect to='/signin' />
  const render =
    <div className="container">
      <form className="white" onSubmit={handleSubmit} id="create-signup-form">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' onChange={emailHandleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id='password' onChange={passwordHandleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id='firstName' onChange={firstNameHandleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id='lastName' onChange={lastNameHandleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </div>
      </form>
    </div>;
  return render;
}

export default SignUp;