import React from 'react'

class Counter extends React.Component {
    constructor(){
        super();
        this.state = { count: 100 }
    }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState(prevState => ({ count: prevState.count + 200 })),
      2500,
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return this.state.count
  }
}

export default Counter