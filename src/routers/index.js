import React, {Component} from "react"
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
// HashRouter #号模式   BrowserRouter 普通模式

import Home from "./home"
import List from "./list"
import HomeSonA from "./homeSonA"
import HomeSonB from "./homeSonB"
import Vegetables from "./vegetables"
import "./index.css"

class AppRouter extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div style={{'display': 'flex'}}>
        <Router>
          <div className="left-box">
            <ul>
              <li>
                <Link to="/">首页</Link>
              </li>
              <li>
                <Link to="/list/99">列表页</Link>
              </li>
            </ul>
          </div>

          <Switch>
            {/*  <Route path="/" exact component={Home}/>*/}
            {/*规定好的id 必须穿*/}
            <Route path="/list/:id" component={List}/>
            <Route path="/vegetables" component={Vegetables}/>
            {/*component  render 这两种方式在路由跳转之后组件得到的this.props不一样*/}

            {/*如果使用这种方式 不要加 exact 会匹配不上 如果不加exact 要把嵌套的路由放到最下面 并使用Switch包裹 */}
            <Route path="/" render={() =>
              <Home>
                <Route path="/home-son-a" exact component={HomeSonA}/>
                <Route path="/home-son-b" exact component={HomeSonB}/>
              </Home>
            }/>
          </Switch>
        </Router>
      </div>
    );
  }
}


export default AppRouter;