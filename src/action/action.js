const charLoaded = data => {
  return {
    type: "CHAR_LOADED",
    payload: data
  }
}

const setError = () => ({type: "ERROR"})
const onRequested = () => ({type: "REQUESTED"})

const dataLoaded = data => {
  return {
    type: "ITEMLIST_DATA_LOADED",
    payload: data
  }
}
const resetData = () => {
  return ({type: "RESET_ITEMLIST_DATA"})
}

const selectDetailsId = id => {
  return {
    type: "SELECT_DETAILS_ID",
    payload: id
  }
}

const detailsItemLoaded = (data) => {
  return {
    type: "DETAILS_ITEM_LOADED",
    payload: data
  }
} 

export {
  setError,
  onRequested,
  charLoaded,
  dataLoaded,
  resetData,
  selectDetailsId,
  detailsItemLoaded
}
