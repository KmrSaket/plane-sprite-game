import './App.css';
import { useEffect, useState } from 'react';
import constants from './utils/constants.ts';
import Game from './Game.js';

function App() {
  
  let [numOfAssets, setNumOfAssets] = useState(0)
  let [gameMode, setGameMode] = useState(0) // 0-> not started; 1-> single player; 2-> second player
  let [displayCanvas, setDisplayCanvas] = useState(false)

  let oBackgroundImage = new Image()
  oBackgroundImage.src = constants.Background.imgSrc
  oBackgroundImage.onload = () => {
    setNumOfAssets((prev) => prev + 1)
  }
  
  let oAltBackgroundImage = new Image()
  oAltBackgroundImage.src = constants.Background.imgSrc
  oAltBackgroundImage.onload = () => {
    setNumOfAssets((prev) => prev + 1)
  }

  let oPowerupImage = new Image()
  oPowerupImage.src = constants.ForeignObjects.powerupSrc
  oPowerupImage.onload = () => {
    setNumOfAssets((prev) => prev + 1)
  }

  let oTruckImage = new Image()
  oTruckImage.src = constants.Player.imgSrc
  oTruckImage.onload = () => {
    setNumOfAssets((prev) => prev + 1)
  }

  let oTruckImageLeft = new Image()
  oTruckImageLeft.src = constants.Player.imgSrcLeft
  oTruckImageLeft.onload = () => {
    setNumOfAssets((prev) => prev + 1)
  }

  let oTruckImageRight = new Image()
  oTruckImageRight.src = constants.Player.imgSrcRight
  oTruckImageRight.onload = () => {
    setNumOfAssets((prev) => prev + 1)
  }

  useEffect(() => {
    if(numOfAssets === 6){
      setDisplayCanvas(true)
    }
  }, [numOfAssets])
  
  return (
    // <div className="App">

    // </div>
    <div className="App">
       {
         gameMode === 0 ?
         
         <div>
           <button onClick={()=>setGameMode(1)}>1 Player Mode</button>
           <button onClick={()=>setGameMode(2)}>2 Player Mode</button>.
         </div>
        
        :

        displayCanvas
         &&
        <Game bgImage={oBackgroundImage} powerupImage={oPowerupImage} playerImage={oTruckImage} altBgImage={oAltBackgroundImage}
          playerImageLeft={oTruckImageLeft} playerImageRight={oTruckImageRight}/>
        

       }
    </div>
  );
}

export default App;
