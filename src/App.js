import './App.css';
import { useEffect, useState } from 'react';
import constants from './utils/constants.ts';
import Game from './Game.js';

function App() {
  
  let [numOfAssets, setNumOfAssets] = useState(0)
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
    if(numOfAssets === 5){
      setDisplayCanvas(true)
    }
  }, [numOfAssets])
  
  return (
    <div className="App">
      {
        displayCanvas
        &&
       <Game bgImage={oBackgroundImage} playerImage={oTruckImage} altBgImage={oAltBackgroundImage}
       playerImageLeft={oTruckImageLeft} playerImageRight={oTruckImageRight}/>
      }
    </div>
  );
}

export default App;
