import { useEffect, useRef, useState } from 'react';
import game from './scripts/game.ts';

function Game({bgImage,altBgImage,playerImage, playerImageLeft, playerImageRight, powerupImage}) {

  let canvasRef = useRef(null)
  let [gameStarted,setGameStarted] = useState(false)
  
   useEffect(()=>{
    if(canvasRef.current){
      if(!gameStarted){
        let canvas = document.querySelector("canvas");
        new game({
          canvas,
          powerupImage,
          playerImage,
          playerImageLeft,
          playerImageRight,
          backgroundImage : bgImage,
          backgroundInvImage:altBgImage
        })
        setGameStarted(true)
      }
    }
  },[altBgImage, bgImage, gameStarted, playerImage, playerImageLeft, playerImageRight, powerupImage])

  return (
      <canvas id="canvas" ref={canvasRef}></canvas>
  );
}

export default Game;
