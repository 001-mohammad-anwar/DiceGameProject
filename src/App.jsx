import GamePlay from "./component/GamePlay";
import StartGame from "./component/StartGame";
import { useState } from "react";


function App() {

   const [isGameStarted, setIsGamestarted] = useState(true)

   const TogalPlayGame=()=>{
    setIsGamestarted((pre)=>true)
   }
  return (
    <>
      {isGameStarted ? <GamePlay/>:<StartGame Togal={TogalPlayGame} />}
      
    </>
  );
}

export default App
