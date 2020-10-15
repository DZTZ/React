// 普通写法
export const setDataAction = (value)=>({
  type:'changeName',//名称
  value//值
})

// 使用中间件写法
export const setData = () => {
  return (dispatch) => {
    // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) => {
    //   // const data = res.data
    //   // const action = setData(data)
    //   // dispatch(action)
    // })

      setTimeout(()=>{
        const action = setDataAction('我使用redux-thunk获取数据并设置的方法===>')
        dispatch(action)
      },2000)

  }
}