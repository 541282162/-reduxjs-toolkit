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
           <div>counter:{this.props.counter}</div>
            <button onClick={this.increment}>增加</button>
          </Fragment>
        )
      }
}
const mapStateProps = (state) => ({
  counter: state.counter.value
})
const mapDispatchProps = (dispatch) => ({
   increment:() =>{dispatch(counterSlice.actions.increment())} 
})
export default connect(mapStateProps,mapDispatchProps)(Counter)
