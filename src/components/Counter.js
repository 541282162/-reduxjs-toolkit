import React, { Component, Fragment } from 'react'
import counterSlice from '../redux/reducer/counter'
import {connect} from 'react-redux'
 class Counter extends Component {
      // 添加数值
      increment = ()=>{
        this.props.increment()
      }
      render() {
        return (
          <Fragment>
           <div>{this.props.counter.name}:{this.props.counter.value}</div>
            <button onClick={this.increment}>加一</button>
            <button onClick={()=>{this.props.decrement()}}>减一</button>
            <button onClick={()=>{this.props.updatePayload(100)}}>变100</button>
          </Fragment>
        )
      }
}
const mapStateProps = (state) =>{
    // console.log(state,'state')
     return ({
      counter: state.counterReducer
    })
} 
const {increment, decrement, updatePayload} = counterSlice.actions
// 1.用函数方法写mapDispatchProps
const mapDispatchProps = (dispatch) => ({
   increment:() =>{
    //  console.log(counterSlice.actions)
     dispatch(increment())
  } ,
   decrement:() =>{dispatch(decrement())},
   updatePayload:(value)=>{dispatch(updatePayload(value))}
})

// 2.用对象的方法写mapDispatchProps
// const mapDispatchProps = {
//   increment:increment,
//   decrement:decrement,
//   updatePayload:updatePayload
// }

// 将容器和组件UI连接
export default connect(mapStateProps,mapDispatchProps)(Counter)
