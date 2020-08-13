import {BrowserRouter, Route} from 'react-router-dom';
import React from 'react';
import {toast} from 'react-toastify'

import Navbar from  './components/navbar';
import Dashboard from './components/dashboard';
import SignIn from './components/signIn';
import SignUp from './components/signUp';

import './App.css';

toast.configure();

function App() {
  return (
    <BrowserRouter>
      <div className = "App">
           <Navbar/>
           <switch>
             <Route exact path ='/' component ={SignIn}></Route>
             <Route path ='/signIn' component ={SignIn}></Route>
             <Route path ='/dashboard' component={Dashboard}></Route>
             <Route path ='/signUp' component ={SignUp}></Route>
           </switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
