import React, {Component} from 'react';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  getProps() {
    console.log(this.props)
    // this.props.history.push("/list/1997");
    this.props.history.push({pathname:"/vegetables",query:{name:'西红柿'}});
  }

  render() {
    return (
      <div className="home-content">
        <h1>我是首页</h1>
        <button onClick={() => this.getProps()}>获取一下 props.history</button>
      </div>
    );
  }
}

export default home;