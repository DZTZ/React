import React, {Component} from 'react';
import store from '../redux'
import { setDataAction,setData } from '../redux/actionCreators'

class ReduxPage extends Component {
  constructor() {
    super();
    //获取 store 中的数据
    this.state = store.getState();
    console.log(this.state)
    //----------关键代码-----------start
    this.storeChange = this.storeChange.bind(this)  //转变this指向
    // store.subscribe(this.storeChange) //订阅Redux的状态
    store.subscribe(()=>{
      this.setState(store.getState())
    }) //订阅Redux的状态
    //----------关键代码-----------end
  }

  storeChange(){
    this.setState(store.getState())
  }
  //改变state中的nam属性
  changeStoreName(){
    // const action ={
    //   type:'changeName',//名称
    //   value:'哦豁！变了！'//值
    // }

    // const action = setDataAction('现在的时间===》')
    // store.dispatch(action)

    const action = setData()
    store.dispatch(action)
  }

  render() {
    return (
      <div>
        <h2>我是redux案例页面</h2>
        <b>当前的store数据：{this.state.name}</b>

        <button
          style={ {display:'block',margin:'15px 0',fontSize:'18px'} }
          onClick={ ()=>this.changeStoreName() }>改变state中的nam属性</button>
      </div>
    );
  }
}

export default ReduxPage;