import {createStore} from "redux"
import rootReducer from "./reducers"

const configureStore = () => {
  const store = createStore(rootReducer, {tick: 0, ticks: []})

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("./reducers", () => {
        store.replaceReducer(rootReducer)
      })
    }
  }

  return store
}

export default configureStore
