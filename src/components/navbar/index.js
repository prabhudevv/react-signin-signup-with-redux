import React from 'react'
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { signOut } from '../../store/actions/user.action';

const Navbar = () => {

  const users = useSelector(state => state.registration.users);
  const loginId = useSelector(state => state.authentication.loginId);
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(signOut());
    toast.info("Logout Successfully", {
      position: "bottom-right",
      autoClose: 2000
    });
  }
  const links = loginId !== undefined ?
    <div>
      <ul className="right">
        <li><a onClick={handleClick}>Logout</a></li>
        <li><NavLink to='#' className="btn btn-floating pink lighten-1">
          {users[loginId].firstName.charAt(0)}{users[loginId].lastName.charAt(0)}</NavLink>
        </li>
      </ul>
    </div>
    : <div>
      <ul className="right">
        <li><NavLink to='/signUp'>Signup</NavLink></li>
        <li><NavLink to='/signIn'>Login</NavLink></li>
      </ul>
    </div>;

  let NavRender = <nav className="nav-wrapper grey darken-3">
    <div className="container">
      <Link to='/' className="brand-logo">React Project </Link>
      {links}
    </div>
  </nav>;

  return NavRender;
}

export default Navbar;