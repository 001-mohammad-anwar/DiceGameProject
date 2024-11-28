import React from 'react'
import styled from 'styled-components'

const TotalScore = () => {
  return (
    <ScoreContainer>
         <h1>0</h1>
         <p>Total  Score</p>
    </ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
display:flex;
 max-width:10%;
 flex-direction:column;
 
h1{
    margin:0 auto;
    font-size:100px;
    line-height:94%;
}

p{
  margin:0 auto;
    font-size:24px;
    font-weight:5px;
}`;