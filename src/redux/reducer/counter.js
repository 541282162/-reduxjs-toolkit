import {createSlice} from '@reduxjs/toolkit'
// 创建一个计数器的状态切片
 const counterSlice = createSlice(
    {
        name:'counter',
        initialState:{
            value:0
        },
        reducers:{
            increment:(state) =>{
                console.log("state",state.value)
                state.value = state.value+1
            }
        }
    }
)

export default counterSlice