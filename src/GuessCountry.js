import React, { Component } from 'react';
import './GuessCountry.css';

class GuessCountry extends Component {
  constructor(props) {
    super(props)
    this.state = {
     countries:[],
     options:[],
     correctOption:undefined,
     questionState:undefined,
    } 
    this.onGuess=this.onGuess.bind(this);
    this.nextQuestion=this.nextQuestion.bind(this);
  }
  componentDidMount() {
   
  }
     
      
   

  
  render() {
  
      return (
        <div className="App">
         
        </div>
      );
    }
}

export default GuessCountry;
