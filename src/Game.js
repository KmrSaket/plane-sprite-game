import { useEffect, useRef, useState } from 'react';
import background from './scripts/background.ts';
import constants from './utils/constants.ts';

function Game({bgImage,altBgImage,playerImage}) {

  let canvasRef = useRef(null)
  let [gameStarted,setGameStarted] = useState(false)
  
   useEffect(()=>{
    if(canvasRef.current){
      if(!gameStarted){
        let canvas = document.querySelector("canvas");
        new background({
          height: constants.CanvasDim.y,
          width: constants.CanvasDim.x,
          canvas: canvas,
          image: bgImage,
          altImage: altBgImage,
          playerImage: playerImage
        });
        setGameStarted(true)
      }
    }
  },[altBgImage, bgImage, gameStarted, playerImage])

  return (
    <>
      <canvas id="canvas" ref={canvasRef}/>
    </>
  );
}

export default Game;