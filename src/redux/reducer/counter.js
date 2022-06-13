import {createSlice} from '@reduxjs/toolkit'
// 创建一个计数器的状态切片
 const counterSlice = createSlice(
    {
        name:'counter',
        initialState:{
            value:0,
            name:'计数器'
        },
        reducers:{
            increment:(state) =>{
                // console.log("state",state.value)
                state.value = state.value+1
            },
            decrement:(state) =>{
                state.value = state.value -1
            },
            updatePayload(preState,action){
                // console.log("updatePayloadAction",action)
                /* 
                   直接用redux是dispatch({type:'方法名'，data：'data'}) 
                   reducer接收是function(preState,action){
                       action === {type:'方法名'，data：'data'}
                   }
                */ 
                /* 
                  现在是用@reduxjs/toolkit
                  action === {type: 'counter/updatePayload', payload: 100}
                 */ 
                preState.value = action.payload
            }
        }
    }
)

export default counterSlice