import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rare: false,
    vid:['bird']
}
export const animalReduxer =createSlice({
name:'flamingo',
initialState,
reducers:{
toogleRare:(state)=>{
state.rare= !state.rare
},
addVid:(state,action)=>{
    state.vid = [...state.vid,action.payload]
}
}
})
export const {toogleRare,addVid} = animalReduxer.actions
export default animalReduxer.reducer