import {createStore, applyMiddleware, compose} from 'redux'  // 引入createStore方法
import thunk from 'redux-thunk' //中间件
import reducer from './reducer'

// 配置中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(applyMiddleware(thunk))

// 中间件和 Redux Dev Tools 同时配置
const store = createStore( reducer, enhancer) // 创建数据存储仓库
export default store

// 只配置 Redux Dev Tools
// const store = createStore(
//   reducer, // 创建数据存储仓库
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())  // 配置Redux Dev Tools
// export default store                 //暴露出去


// 只配置 中间件
// const store = createStore(
//   reducer,
//   applyMiddleware(thunk)
// ) // 创建数据存储仓库
// export default store