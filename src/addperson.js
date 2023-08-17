import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:[],
    number:[],
total:[]
}
const addPerson = createSlice({
    name:'addPerson',
    initialState,
    reducers:{
        addName:(state,action)=>{
             state.name = [...state.name,action.payload]
        },
        addNumber:(state,action)=>{
            state.number = [...state.number,action.payload]
       },
    addFinal:(state,action)=>{
        const number = state.number
        const names= state.name
        function stitch(x, y) {
            var arr = [];
            arr.push(x,y)
            return arr;
          }
          const finalperson = stitch(action.payload.name,action.payload.number)   
          state.total = [...state.total,finalperson]
    },
    }})
export const {addName,addNumber,addFinal} = addPerson.actions
export default addPerson.reducer