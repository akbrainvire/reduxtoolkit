
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import count from '../reducers/counterSlice';

const reducer = combineReducers({
    count
})

const store = configureStore({
    reducer,

})

export default store;