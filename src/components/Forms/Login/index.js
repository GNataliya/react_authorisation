import style from './style.module.scss';
import Button from '@mui/material/Button';

import { NavLink, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as usersActions from '../../../actions/users';
import { Form, Field } from "react-final-form";



function LoginForm() {

  const dispatch = useDispatch();  
  const user = useSelector(state =>  state.users.user);
  console.log('data from state in login form', user)


  const onSubmit = async (values) => {
    try{
      await usersActions.login(dispatch, values);
    } catch (err) {
      console.log(err);
    }
  
};

const required = (value) => (value ? undefined : "Required");


  return (
    <div className={style.box}>

      {user.status === 'ok' ? <Navigate to="/userProfile" /> : null }
      
      <Form
        onSubmit={onSubmit}
        // initialValues={formData}

        render={({ handleSubmit, form, submitting, pristine, values }) => (

          <form onSubmit={handleSubmit}>

            <h2> Log In </h2>

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
      
            <div className={style.buttons}>
              <Button variant="outlined" size="medium" type="submit" disabled={submitting}>
                Log in
              </Button>

              <Button variant="outlined" size="medium" type="button">
                <NavLink to='/signup'> Sign Up </ NavLink>
              </Button>
            </div> 
             
          </form>
        )}
      />

    </div>
  );
};


// }

export default LoginForm;


// const items = [
//   { id: 1111111, name: 'velik', attr: ['killme'] },
//   { id: 22222, name: 'brrrr', attr: ['fast'] },
//   { id: 133331, name: 'blabla', attr: ['grrrr'] },
// ]

// const dispatch = useDispatch();
// const getItems = useSelector(state => state.items)
// console.log('getItems', getItems)


// useEffect( async() => {

//   console.log('items', items)
//   await dispatch(actionCreator(items))
// })
