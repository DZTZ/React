import React, {Component} from "react"
import {HashRouter as Router, Route, Link,Switch } from "react-router-dom"
// HashRouter #号模式   BrowserRouter 普通模式

import Home from "./home"
import List from "./list"
import HomeSonA from "./homeSonA"
import HomeSonB from "./homeSonB"
import Vegetables from "./vegetables"
import "./index.css"

class AppRouter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={ {'display':'flex'} }>
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

          {/*<Switch>*/}
            {/*<Route path="/" exact component={Home}/>*/}
            <Route path="/" exact render={() =>
                <Home>
                  <Route exact path="/home-son-a" component={HomeSonA} />
                  <Route exact path="/home-son-b" component={HomeSonB} />
                </Home>
            }/>
            {/*规定好的id 必须穿*/}
            <Route path="/list/:id" exact component={List}/>
            <Route path="/vegetables" exact component={Vegetables}/>
          {/*</Switch>*/}

        </Router>
      </div>
    );
  }
}


export default AppRouter;