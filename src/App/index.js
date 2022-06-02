import style from './style.module.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import Header from '../components/Header';
// import HeaderProfile from '../components/HeaderProfile';
import Footer from '../components/Footer';
import Signup from '../components/Forms/Signup';
import Login from '../components/Forms/Login';
import HomePage from '../containers/HomePage';
import UserProfile from '../containers/UserProfile';


function App() {
  
  const user = useSelector(state =>  state.users.user);

 
  return (
    <div className={style.app}>
    
    {/* { !user ? <Header /> : <HeaderProfile /> } */}
    <Header />
      
      <Routes>
        <Route path='*' element={<HomePage />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/userProfile' element={ user ? <UserProfile /> : <Login /> } />
        
      </Routes>

    <Footer />

    </div>
  );
}

export default App;
