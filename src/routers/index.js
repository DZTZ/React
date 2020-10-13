import React, {Component} from "react"
import {BrowserRouter as Router, Route, Link } from "react-router-dom"

import Home from "./home"
import List from "./list"
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

          <Route path="/" exact component={Home}/>
          {/*规定好的id 必须穿*/}
          <Route path="/list/:id" exact component={List}/>
          <Route path="/vegetables" exact component={Vegetables}/>
        </Router>
      </div>
    );
  }
}


export default AppRouter;