import './App.css';
import { useEffect } from 'react';
import background from './scripts/background.ts';
import constants from './utils/constants.ts';

function App() {
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const oBg = new background({
      height: constants.CanvasDim.y,
      width: constants.CanvasDim.x,
      canvas: canvas
    });
  }, [])
  
  return (
    <div className="App">
      <canvas id="canvas"/>
    </div>
  );
}

export default App;
