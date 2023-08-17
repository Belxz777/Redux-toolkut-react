
import { configureStore } from "@reduxjs/toolkit"
import animalReduxer from './animalReduxer'
import counter from "./counter"
import addperson from "./addperson"
// 
export const store = configureStore(
    {
        reducer: { 
        animal:animalReduxer,
        counter:counter,
addperson:addperson
    },
    }
)