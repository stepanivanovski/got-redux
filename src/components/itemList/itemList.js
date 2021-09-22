import React, { useEffect } from "react";
import Spinner from "../spinner/spinner";
import { connect } from 'react-redux'
import * as actions from '../../action/action'
import "./itemList.css";

class ItemList extends React.Component {
  
  componentDidMount() {
    this.props.getData()
    .then(data => this.props.dataLoaded(data))
  }

  componentWillUnmount() {
    this.props.resetData()
  }

  itemKey = 0;
  
  renderItems = (arr) => {
    return arr.map((item) => {
      const label = this.props.renderItem(item);
      return (
        <li 
          className="list-group-item" 
          key={++this.itemKey}
          onClick={() => {this.props.onItemSelected(item.id)}}>
            {label}
        </li>
      )   
    })
  }

  render() {
  
    const { data } = this.props

    if (data.length === 0) {
      return <Spinner/>
    }

    const items = this.renderItems(data)
    
    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    )
  } 
}

const mapDispatchProps = actions;

const mapStateProps = (state) => {
  return {
    data: state.itemListReducer.itemListData
  }
}

export default connect(mapStateProps, mapDispatchProps)(ItemList);