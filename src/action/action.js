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
    type: "DATA_LOADED",
    payload: data
  }
}
const resetData = () => {
  console.log("jxbcnrf");
  return ({type: "RESET_DATA"})
}

const selectDetailsId = id => {
  return {
    type: "SELECT_DETAILS_ID",
    payload: id
  }
}

export {
  setError,
  onRequested,
  charLoaded,
  dataLoaded,
  resetData,
  selectDetailsId,
}
