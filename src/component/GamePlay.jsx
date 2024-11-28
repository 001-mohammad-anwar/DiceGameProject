import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'

const GamePlay = () => {
  return (
    <MainContainer>
       <div className="Top_Section">
       <TotalScore/>
        <NumberSelector/>
       </div>
       <RollDice/>
    </MainContainer>
  )
}
export default GamePlay

const MainContainer = styled.main`
padding-top:70px;
margin:auto;
max-width: 95%;
 
 .Top_Section{
   display: flex;
   justify-content:space-between;
   align-items:end;
 }
`;
