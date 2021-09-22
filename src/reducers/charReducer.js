const initialState = {
  loading: true,
  error: false,
  char: [],
}

const charReducer = (state=initialState, action) => {
  switch(action.type) {
    case "CHAR_LOADED":
      return {
        ...state,
        char: action.payload,
        loading: false,
        error: false
      } 
    case "REQUESTED":
      return {
        ...state,
        loading: true
      } 
    case "ERROR":
      return {
        ...state,
        error: true,
        loadig: false
      } 
    default:
      return state;
  }
}

export default charReducer