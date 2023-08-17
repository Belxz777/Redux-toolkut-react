import { createSlice,createReducer } from "@reduxjs/toolkit"
//
  export const counterSliced = createSlice({
     name:'counter',
     initialState:{count:0},
     reducers:{
       plus:(state,action)=>{
             state.count+= 1
             },
             minus:(state,action)=>{
                 state.count-=1
             }
     }
 })
 export const {plus,minus} = counterSliced.actions
  //сдесь мы экспортируем все созданные функции что бы usat их в app.js
  
 export default counterSliced.reducer