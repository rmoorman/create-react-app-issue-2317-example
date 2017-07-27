import React, {Component} from "react"
import logo from "./logo.svg"
import "./App.css"

import {connect} from "react-redux"

const mapStateToProps = state => ({
  tick: state.tick,
})

const mapDispatchToProps = (dispatch) => ({
  tickIncrement: () => dispatch({type: "tick"}),
})

class App extends Component {
  componentDidMount() {
    this.interval = window.setInterval(this.handleTick, 1000)
  }
  componentWillUnmount() {
    window.clearInterval(this.interval)
  }
  handleTick = () => {
    this.props.tickIncrement()
  }
  render() {
    const {tick} = this.props
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Tick: {tick}</p>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
