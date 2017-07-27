const rootReducer = (state, action) => {
  switch (action.type) {
    case "tick":
      return {...state, tick: state.tick + 1}
    default:
      return state
  }
}

export default rootReducer
