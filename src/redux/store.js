import {configureStore} from "@reduxjs/toolkit"
// 引入counter状态切片
import counterSlice from "./reducer/counter"


// 初始化store
const store = configureStore({
    reducer:{
        counter: counterSlice.reducer
    }
})

export default store