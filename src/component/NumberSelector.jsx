import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'


const NumberSelector = () => {

    const NumberArray = [1,2,3,4,5,6];
    const [selectedNumber , setSelectedNumber] = useState()
  return (
    <NumberSelectorContainer>
      <div className="flex">
                {NumberArray.map((value,  i) => (
                    <Box 
                    isSelected = {value === selectedNumber}
                    onClick={()=>setSelectedNumber(value)}
                    key={i}>{value}</Box>
                ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer =styled.div`
  
   display:flex;
   flex-direction:column;
   align-items:end;
  .flex{
    display: flex;
    gap: 24px;
  }

  p{
    font-size: 24px;
    font-weight: 700px;
  }
`;

const Box = styled.div`
display: grid;
height:72px;
width:72px;
border: 2px solid black;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props) => props.isSelected ? "black" : "white"};
color: ${(props) => !props.isSelected ? "black" : "white"}
`;
