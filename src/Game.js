import { useEffect, useRef, useState } from 'react';
import game from './scripts/game.ts';

function Game({bgImage,altBgImage,playerImage, playerImageLeft, playerImageRight}) {

  let canvasRef = useRef(null)
  let [gameStarted,setGameStarted] = useState(false)
  
   useEffect(()=>{
    if(canvasRef.current){
      if(!gameStarted){
        let canvas = document.querySelector("canvas");
        new game({
          canvas,
          playerImage,
          playerImageLeft,
          playerImageRight,
          backgroundImage : bgImage,
          backgroundInvImage:altBgImage
        })
        setGameStarted(true)
      }
    }
  },[altBgImage, bgImage, gameStarted, playerImage, playerImageLeft, playerImageRight])

  return (
      <canvas id="canvas" ref={canvasRef}></canvas>
  );
}

export default Game;
