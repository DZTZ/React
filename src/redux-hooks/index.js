import React, {useState,useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

function Index() {
  useEffect(()=>{
    console.log('useEffect===>主页')
    return()=>{
      console.log('主页走了')
    }
  },[])
  return (<div>我是主页</div>)
}
function List() {
  useEffect(()=>{
    console.log('useEffect===>List页')
  })
  return (<div>我是List页</div>)
}

function Ex(){
  const [count,setCount] = useState(0)

  useEffect(()=>{
    console.log('useEffect===>' + count)
    return()=>{
      console.log('===================')
    }
  },[count])

  return(
      <div>
        <p>点击了{count}下</p>
        <button onClick={()=>setCount(count+1)}>点击</button>

        <Router>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/list">列表</Link></li>
          </ul>
          <Route path="/" exact component={Index}></Route>
          <Route path="/list" exact component={List}></Route>
        </Router>
      </div>
  )
}

export default Ex;