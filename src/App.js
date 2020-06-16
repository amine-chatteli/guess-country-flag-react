import React, { Component } from 'react';
import CountryGame from './CountryGame'
class App extends Component {
 
  render() {
      return (
        <div className="flag-app">
            <header className='title-header'
            style={{backgroundImage:``}}>
                <h1 className="title-text">Guess The Flag</h1>
            </header>
            <CountryGame />
        </div>
      );
    }
  
}

export default App;