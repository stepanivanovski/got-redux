import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from '../components/header/header';
import RandomChar from '../components/randomChar/randomChar';
import CharacterPage from '../pages/characterPage';
import HousePage from '../pages/housePage';
import BookPage from '../pages/bookPage';
import BooksItem from '../pages/booksItemPage';
// import Error from '../components/error/error'

import './app.css';

class App extends React.Component {
  constructor() {
    super()
    this.onToggleRandomChar = this.onToggleRandomChar.bind(this)
  }
  
  state = {
    randomChar: true,
  }
  
  onToggleRandomChar = () => {
    this.setState(({randomChar}) => {
      return {
        randomChar:!randomChar
      }
    })
  }
  
  render() {
    const {randomChar} = this.state;
    const component = (randomChar) ? <RandomChar interval={5000}/> : null;

    return (
      <Router>
        <div className="app"> 
          <div className="container">
            <Header/>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                {component}
                <button 
                  className='btn btn-primary mb-4'
                  onClick={this.onToggleRandomChar}>
                    Toggle random character
                </button>
              </div>
            </div>
            <Switch>
              <Route path="/characters" component={CharacterPage}/>
              <Route path="/books"  exact component={BookPage}/>
              <Route path="/houses" component={HousePage}/>
              <Route path="/books/:id" render={
                  (match) => {
                    console.log(match);
                    const {id} = match.match.params
                    return <BooksItem id={id}/>
                  }
                }/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
};

export default App;
