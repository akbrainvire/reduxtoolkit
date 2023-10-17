

import { createReducer, createSlice } from "@reduxjs/toolkit";
// import { increase, decrease } from "../actions.js/action";

const initialState = { counter: 0 }

const counterSlice = createSlice({name: "count",
initialState,
reducers: {
    increase: (state,action)=>{
        return state =  {...state, counter: state.counter + parseInt(action.payload)}; 
    },
    decrease: (state,action) => {
        return state =  {...state, counter: state.counter - parseInt(action.payload)}; 
    }
}
})

// export default createReducer(initialState,{
//     [increase.type]: (state,action) => {
//         return state =  {...state, counter: state.counter + parseInt(action.payload)}; 
//     },
//     [decrease.type] : (state,action) => {
//         return state =  {...state, counter: state.counter - parseInt(action.payload)};
//     }
// })


// const reducer = (state = initialState, action) => {

//     switch(action.type){    
//         case "INC" : 
//             return state = {...state, counter: state.counter + parseInt(action.payload)}; 
//         case "DEC" : 
//             return state = {...state, counter: state.counter - parseInt(action.payload)};
//         default : return state;
//     }

// }

export const {increase, decrease} = counterSlice.actions;
export default counterSlice.reducer;