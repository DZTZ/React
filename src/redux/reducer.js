const defaultState = {
  name: '大哥大'
}  //默认数据

export default (state = defaultState, action) => {  //就是一个方法函数
  // console.log(action)
  if (action.type === 'changeName') {
    let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
    newState.name = action.value+ new Date() //学习使用 项目中不要在这里写 new Date()
    return newState
    //这里返回后 还需要在页面上设置一下才能看到改变后的效果
  }
  return state
}
