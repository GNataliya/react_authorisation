import style from './style.module.scss';
import Button from '@mui/material/Button';

import axios from 'axios';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as usersActions from '../../../actions/users';
import { Form, Field } from "react-final-form";
import HomePage from '../../../containers/HomePage';



function SignupForm() {

  const [ hideForm, setHideForm ] = useState(`${style.form}`);
  const [ showMessage, setShowMessage ] = useState(false);

  const dispatch = useDispatch();  
  const user = useSelector(state =>  state.users.user);
  console.log('data from state', user)
    

  const onSubmit = async (values) => {
    try{
      await usersActions.signUp(dispatch, values);
    } catch (err) {
      console.log(err);
    }
    setHideForm(`${style.form} ${style.hidden}`)
  }
  

  const required = (value) => (value ? undefined : "Required");

  return (
    <div className={style.box}>
          
      {user.status === 'ok' ? <Navigate to="/userProfile" /> 
        : user.status === 'dublicate_email' ? `${hideForm}`&&<div className={style.message}>Email is already declarated</div>
        : null }
      
      <div className={hideForm}>

        <Form
          onSubmit={onSubmit}
          validate={(values) => {
            const errors = {};
            if (!values.confirm) {
              errors.confirm = "Required";
            } else if (values.confirm !== values.pwd) {
              errors.confirm = "Must match";
            }
            return errors;
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (

            <form onSubmit={handleSubmit} >

              <h2> Sign Up </h2>

              <Field name="name" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>First Name</label>
                    <input {...input} type="text" placeholder="First Name" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <Field name="city" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>City</label>
                    <input {...input} type="text" placeholder="City" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <Field name="email" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Email</label>
                    <input {...input} type="text" placeholder="Email" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <Field name="pwd" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Password</label>
                    <input {...input} type="password" placeholder="Password" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <Field name="confirm" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Confirm</label>
                    <input {...input} type="password" placeholder="Confirm" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
      
              <div className={style.buttons}>
                <Button variant="outlined" size="medium" type="submit" disabled={submitting}>
                  Sign Up
                </Button>

                <Button variant="outlined" size="medium" type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}>
                  Reset
                </Button>
              </div> 
            
            </form>
          )}
        />

      </div>

    </div>
  );

};


export default SignupForm;
