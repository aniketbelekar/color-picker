import React, { useState } from 'react';
import './App.css';
import Colorpicker from './components/Colorpicker';
import History from './components/History';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('');
  const [colorName, setColorName] = useState('');
  const [colorCode, setColorCode] = useState('');
  const [colorHistory, setColorHistory] = useState([]);

  const generateHexColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
    setColorName('HEX Color');
    setColorCode(randomColor);
    setColorHistory([...colorHistory, randomColor]);
  };

  const generateRGBColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    setBackgroundColor(rgbColor);
    setColorName('RGB Color');
    setColorCode(rgbColor);
    setColorHistory([...colorHistory, rgbColor]);
  };

  const generateRandomColor = () => {
    const randomType = Math.random() < 0.5 ? 'hex' : 'rgb';
    if (randomType === 'hex') {
      generateHexColor();
    } else {
      generateRGBColor();
    }
  };

  return (
    <div className='container'>
      <div className='btn'>
        <button onClick={generateHexColor}>create HEX color</button>
        <button onClick={generateRGBColor}>create RGB color</button>
        <button onClick={generateRandomColor}>Generate Random color</button>
      </div>
      <Colorpicker colorName={colorName} colorCode={colorCode} backgroundColor={backgroundColor} />
      <History colorHistory={colorHistory} />
    </div>
  );
}

export default App;
