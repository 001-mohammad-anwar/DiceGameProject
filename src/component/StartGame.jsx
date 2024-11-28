import React from 'react'
import styled from "styled-components";

const StartGame = ({Togal}) => {
  return (
    <Container>
       <div><img src="image/Dices.png" alt="Dices" /></div>
       <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={Togal} >Play Now</Button>
       </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
max-width:1180px;
margin: 0 auto;
height: 100vh;
display:flex;
align-items:center;
justify-content: center;

.content h1{
  font-size:96px;
  white-space:nowrap; 
}
.content button{
  font-size:18px;
}

`;

const Button = styled.button`color:white;
padding:10px 18px;
background:black;
border-radius:5px;
min-width:220px;
border:none;
cursor:pointer;
transition:0.4s background ease-in;
border:1px solid transparent;

&:hover{
  background-color:white;
  color:black;
 
  border:1px solid black;
  transition:0.3s background ease-in;
}`;

