import { useEffect, useRef, useState } from 'react';
import game from './scripts/game.ts';

function Game({bgImage,altBgImage,playerImage}) {

  let canvasRef = useRef(null)
  let [gameStarted,setGameStarted] = useState(false)
  
   useEffect(()=>{
    if(canvasRef.current){
      if(!gameStarted){
        let canvas = document.querySelector("canvas");
        new game({
          canvas:canvas,
          playerImage:playerImage,
          backgroundImage : bgImage,
          backgroundInvImage:altBgImage
        })
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
