import axios from 'axios';
import { USERS_LOAD_IN_PROGRESS, USERS_LOAD_FAIL, 
    REGISTR_USERS, LOGIN_USERS, LOGOUT_USERS,
    USER_AVATAR
} from './type';

const loadingUsers = (data) => {
    const action = { type: USERS_LOAD_IN_PROGRESS, payload: 'Loading' };
    return action;
};

const addUsersAction = async (data) => {
   
    const result = await axios.post('api/auth/signup', data);
    // console.log('result in action', result.data);
    
    if(result.status !== 200){
        const action = { type: USERS_LOAD_FAIL, payload: 'load Fail' };
        return action;
    }

    const action = { type: REGISTR_USERS, payload: result.data };
   
    return action;
};

const signUp = async (dispatch, data) => {
    dispatch( loadingUsers());
    dispatch(await addUsersAction(data));
};


const findAndLogin = async (data) => {

    const result = await axios.post('api/auth/login', data);
    // console.log('login result in action', result.data);
    
    if(result.status !== 200){
        const action = { type: USERS_LOAD_FAIL, payload: 'load Fail' };
        return action;
    }

    const action = { type: LOGIN_USERS, payload: result.data };
   
    return action;
};

const login = async (dispatch, data) => {
    dispatch( loadingUsers());
    dispatch(await findAndLogin(data));
};

const logout = (dispatch, data) => {
    const action = { type: LOGOUT_USERS, payload: data };
    return action;
};

const updateAvatar = (dispatch, payload) => {
    return dispatch({ type: USER_AVATAR, payload: payload});
};

export { signUp, login, logout, updateAvatar };

