import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = () => {

    const [currentState , setCurrentState] = useState(1);

    console.log(currentState);
        
        const randomNumber = (min , max) =>{
          return  Math.floor(Math.random() * (max - min + 1)) + min; 
        };

     const roleDice = ()=>{
        const NewrandomNumber = randomNumber(1,6);
        setCurrentState(NewrandomNumber);
     }  
     
  return (
    <DiceContainer>
       <div className='Dice' onClick={roleDice}>
        <img src={`image/Dice/dice_${currentState}.png`}alt="Dice1" />
       </div>
       <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`

.Dice{
    cursor: pointer;
}
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-top:48px;

 p{
    font-size:24px;
 }
`;