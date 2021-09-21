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
const resetData = () => ({type: "RESET_DATA"})

export {
  setError,
  onRequested,
  charLoaded,
  dataLoaded,
  resetData
}
