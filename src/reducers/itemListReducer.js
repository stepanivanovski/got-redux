const initialState = {
  itemListData: []
}

const itemListReducer = (state=initialState, action) => {
  switch(action.type) {
    case "ITEMLIST_DATA_LOADED":
      return {
        ...state,
        itemListData: action.payload
      }
    case "RESET_ITEMLIST_DATA":
      return {
        ...state,
        itemListData: []
      }
    default:
      return state;
  }
}

export default itemListReducer