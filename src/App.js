import { useState } from 'react';
import Input from './Input.js';
import Square from './Square.js';

function App() {
  const [colourValue, setColourValue] = useState('');
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
      <Square
        colourValue={colourValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Input 
        colourValue={colourValue} 
        setColourValue={setColourValue}
        hexValue={hexValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
