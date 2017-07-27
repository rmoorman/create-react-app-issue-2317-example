import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"

import "./index.css"
import App from "./App"
import configureStore from "./configureStore"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    )
  })
}
