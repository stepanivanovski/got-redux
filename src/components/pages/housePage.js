import React from 'react';
import ItemList from '../itemList/itemList';
import { connect } from 'react-redux';
import * as actions from '../../action/action'
import ItemDetails, { Field } from '../itemDetails/itemDetails';
import serviceGOT from '../../services/serviceGOT';
import RowBlock from '../rowBlock/rowBlock';

 class HousePage extends React.Component {

  gotService = new serviceGOT();

  render() {

    const itemList = (
      <ItemList 
        onItemSelected={this.props.selectDetailsId}
        getData={this.gotService.getAllHouses}
        renderItem={({name}) => name}/>
    );

    const houseDetails = (
      <ItemDetails 
        itemId={this.props.detailsId}
        getData={this.gotService.getHouse}>
          <Field field='region' label='Region'/>
          <Field field='words' label='Words'/>
          <Field field='titles' label='Titles'/>
          <Field field='overlord' label='Overlord'/>
          <Field field='ancestralWeapons' label='Weapons'/>
      </ItemDetails>
    );

    return (
      <RowBlock left={itemList} right={houseDetails}/>
    )
  }
}

const mapStateProps = (state) => {
  return {
    detailsId: state.detailsId 
  }
}

const mapDispatchProps = actions

export default connect(mapStateProps, mapDispatchProps)(HousePage)