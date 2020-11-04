import React from 'react';
import StyledButton from './StyledButton';
import './FlagAnswer.css'
const FlagAnswer = ({correct, answer, onNext}) => (
  <div className='flag-answer'>
    {correct ?
     <span style={{color:'green',fontSize:'50px'}}>{`Correct!: ${answer}`}</span>  :
     <span style={{color:'red',fontSize:'50px'}}>Incorrect! Correct Answer: {answer}</span> }
    <StyledButton text="NEXT" onClick={onNext} />
  </div>
);

export default FlagAnswer;