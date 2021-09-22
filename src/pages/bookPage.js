import React from 'react';
import ItemList from '../components/itemList/itemList';
// import ErrorMessage from '../error/error';
import serviceGOT from '../services/serviceGOT';
import { useHistory } from 'react-router-dom';

const BookPage = () => {
  const gotService = new serviceGOT();
  const history = useHistory()

  return (
    <ItemList 
      onItemSelected={(itemId) => {
        console.log(this);
        history.push(`/books/${itemId}`)
      }}
      getData={gotService.getAllBooks}
      renderItem={({name}) => name}/>
  )
}

export default BookPage