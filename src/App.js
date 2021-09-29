import logo from './logo.svg';
import React  from 'react';
import {useState} from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor ] = useState('red')
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'
  return (
    <div className="App">
      <button style={{backgroundColor: buttonColor}} disabled={disabled} onClick={()=> setButtonColor(newButtonColor)}>Change to {newButtonColor}</button>
      <br/>
      <input type="checkbox" id="enable-button" 
      //defaulting to the default disabled 
      defaultChecked={disabled} 
      //Accessibility issues
      aria-checked={disabled}
      onChange={(e)=> setDisabled(e.target.checked)}/>
      </div>
  );
}

export default App;
