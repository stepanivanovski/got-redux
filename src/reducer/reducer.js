const initialState = {
  loading: true,
  error: false,
  char: [],
  data: []
}

const reducer = (state=initialState, action) => {
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
    case "DATA_LOADED":
      return {
        ...state,
        data: action.payload
      }
    case "RESET_DATA":
      return {
        ...state,
        data: []
      }
      
    default:
      return state;
  }
}

export default reducer