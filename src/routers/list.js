import React, {Component} from 'react';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      paramsData: {}
    }
  }

  componentDidMount() {
    this.setState({
      paramsData: this.props.match.params
    })
  }

  render() {
    return (<h2>我是列表页 带过来的参数是：{ this.state.paramsData.id }</h2>);
  }
}

export default home;