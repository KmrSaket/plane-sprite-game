import './App.css';
import { useEffect, useState } from 'react';
import constants from './utils/constants.ts';
import Game from './Game.js';

function App() {
  
  // function startGame(){
  //   let canvas = document.querySelector("canvas");
  //   new background({
  //     height: constants.CanvasDim.y,
  //     width: constants.CanvasDim.x,
  //     canvas: canvas,
  //     image: oBackgroundImage
  //   });
  // }
  
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
  oTruckImage.src = constants.player.imgSrc
  oTruckImage.onload = () => {
    setNumOfAssets((prev) => prev + 1)
  }

  useEffect(() => {
    if(numOfAssets === 3){
      setDisplayCanvas(true)
    }
  }, [numOfAssets])
  
  return (
    <div className="App">
      {
        displayCanvas
        &&
       <Game bgImage={oBackgroundImage} playerImage={oTruckImage} altBgImage={oAltBackgroundImage}/>
      }
    </div>
  );
}

export default App;
