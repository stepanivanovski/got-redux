import React, { useEffect } from "react";
import serviceGOT from "../../services/serviceGOT";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error/error";
import { connect } from "react-redux";
import * as action from '../../action/action'

import "./randomChar.css";

const RandomChar = ({char, loading, error, setError, charLoaded, onRequested, interval}) => {
  
  const gotService = new serviceGOT(); 

  const updateChar = () => {
    console.log("update");
    const id = Math.floor(Math.random()*140 + 25);
    gotService.getCharacter(id)
      .then(char => charLoaded(char))
      .catch(error => setError())  
  }
 
  useEffect(() => {
    const timer = setInterval(() => updateChar(), interval)

    return () => {
      clearInterval(timer)
    }
  });

  const content = (loading) ? <Spinner/> : (error) ? <ErrorMessage/> : <View char={char}/> 

  return (
    <div className="random-block rounded mb-4">
      {content}
    </div>
  )
}

const View = ({char}) => {
  const {name, gender, born, died, culture} = char;

  return (
    <React.Fragment>
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender</span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born</span>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died</span>
          <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture</span>
          <span>{culture}</span>
        </li>
      </ul>
    </React.Fragment>
  )
}  

const mapDispatchProps = action;
const mapStateProps = (state) => {
  return {
    loading: state.charReducer.loading,
    error: state.charReducer.error,
    char: state.charReducer.char
  }
}

export default connect(mapStateProps, mapDispatchProps)(RandomChar);






 