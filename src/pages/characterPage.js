import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../action/action'
import ItemList from '../components/itemList/itemList';
import ItemDetails, { Field } from '../components/itemDetails/itemDetails';
import serviceGOT from '../services/serviceGOT';
import RowBlock from '../components/rowBlock/rowBlock';

class CharacterPage extends React.Component {

  gotService = new serviceGOT();
  
  render() {
    console.log(`Page ${this.props.detailsId}`);
    const itemList = (
      <ItemList 
        onItemSelected={this.props.selectDetailsId}
        getData={this.gotService.getAllCharacters}
        renderItem={({name, gender}) => { return `${name} ${gender}`}}/>
    );

    const charDetails = (
      <ItemDetails 
        itemId={this.props.detailsId}
        getData={this.gotService.getCharacter}>
          <Field field='gender' label='Gender'/>
          <Field field='born' label='Born'/>
          <Field field='died' label='Died'/>
          <Field field='culture' label='Culture'/>
      </ItemDetails>
    );

    return (
      <RowBlock left={itemList} right={charDetails}/>
    )
  }
}

const mapStateProps = (state) => {
  return {
    detailsId: state.detailsReducer.detailsId 
  }
}

const mapDispatchProps = actions

export default connect(mapStateProps, mapDispatchProps)(CharacterPage)