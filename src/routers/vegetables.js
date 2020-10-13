import React, {Component} from 'react';

class Vegetables extends Component {
  constructor() {
    super();
    this.state = {
      name:''
    }
  }

  componentDidMount() {
    //这样传过来的值刷新一下就没了
    console.log(this.props.location)
    this.setState({
      name: this.props.location.query?this.props.location.query.name:''
    })
  }

  render() {
    return (<h2>我是蔬菜页:传过来一个 {this.state.name}</h2>);
  }
}

export default Vegetables;