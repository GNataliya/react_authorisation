import { combineReducers } from 'redux';  // native redux function
import usersReducer from './users';   // import reducer from file users

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'      // defaults to localStorage for web


export default function createReducer(injectReducers)  {

// collect all reducers
    const rootReducer = combineReducers({
        users: usersReducer,         // add reducer and after it will have name users
        
        
        ... injectReducers
    });
    // return rootReducer;       - without persist use it


    const persistConfig = {      // create it for LocalStorage
        key: 'root',
        storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);   // collect 2 stores
    return persistedReducer;
}