const initialState = {
  detailsId: null,
  detaisItem: {}
}

const detailsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "SELECT_DETAILS_ID": 
      return {
        ...state,
        detailsId: action.payload
      }
    case "DETAILS_ITEM_LOADED":
      return {
        ...state,
        detailsItem: action.payload
      }
    default:
      return state;
  }
}

export default detailsReducer