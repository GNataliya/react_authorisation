import update from 'immutability-helper';
import { USERS_LOAD_IN_PROGRESS, USERS_LOAD_FAIL, REGISTR_USERS, LOGIN_USERS, LOGOUT_USERS,
    USER_AVATAR
} from '../actions/type';

const initialState = {
    status: '',
    user: {}  
};

const reducer = (state = initialState, action) => {
    console.log('2 - action in Reducer', action)
    console.log('3 - state in Reducer', state)
    console.log('4 - action.payload', action.payload)

    switch (action.type){
        
        case 'USERS_LOAD_IN_PROGRESS':
            {
                return update(state, {status: {$set: action.payload }});
            }
        case 'USERS_LOAD_FAIL':
            {
                return update(state, {status: {$set: action.payload }});
            }
        case 'REGISTR_USERS':
            {
                return update(state, {status: {$set: 'ok'},  user: {$set: action.payload } });
                // return {...state, user: action.payload }      
            }
        case 'LOGIN_USERS':
            {
                return update(state, {status: {$set: 'ok'},  user: {$set: action.payload } });     
            }
        case 'LOGOUT_USERS':
            {
            //    return update(state, { user: {$set: {} }}); 
            }
        case 'USER_AVATAR':
            {      
                // if()          
                return update(state, {status: {$set: 'ok'}, user: { user: {$merge: {avatar: action.payload}} } });
            }

        default: 
            return state;       
    }
} 

export default reducer;