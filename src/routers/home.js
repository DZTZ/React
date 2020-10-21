import React, {Component} from 'react';
import {withRouter, Link} from "react-router-dom"

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  getProps() {
    // console.log(this.props.history)
    this.props.history.push({pathname: "/vegetables", query: {name: '西红柿'}});
  }

  toSonPage(type) {
    // console.log(this)
    if (type === 1) {
      this.props.history.push({pathname: "/home-son-a"});
    } else {
      this.props.history.push({pathname: "/home-son-b"});
    }
  }

  render() {
    return (
        <div className="home-content">
          <h1>我是首页</h1>
          <button onClick={() => this.getProps()}>去蔬菜页</button>
          <ul className="home-nav-button">
            <li onClick={() => this.toSonPage(1)}>首页子页面A</li>
            <li onClick={() => this.toSonPage(2)}>首页子页面B</li>
            {/*<li><Link to="/home-son-a">首页子页面A</Link></li>*/}
            {/*<li><Link to="/home-son-b">首页子页面B</Link></li>*/}
          </ul>
          {this.props.children}
        </div>
    );
  }
}

// 要withRouter绑定到组件上不然组件上是没有this.props.children.history
export default withRouter(home);