import { useState } from 'react'
import './App.css'
import './index.css'
import NumberInput from './components/NumInput'
import Slider from './components/Slider'



function App() {
  //RGB states (variables which are observed; UI updates if state changes)
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  //validate the RGB value
  function validateValue(value) {
    return value >= 0 && value <= 255;
  }
  function redirectToGitHub() {
    window.location.href="https://github.com/tesj/React-Color-Picker"
  }
  function resetRGB() {
    setRed(0)
    setBlue(0)
    setGreen(0)
  }

  //return the React component
  return (
    <div style = {{display: "flex", flexDirection: "column"}}>
      <header className="nav-bar-container">
        <div className="nav-bar">
          <p className="nav-banner">Speich's React Color Picker</p>
          <p className="nav-btn" onClick={resetRGB}>Reset</p>
          <p className="nav-btn" onClick={redirectToGitHub}>GitHub</p>
        </div>
      </header>
      <div className="flex-row">
        <div className="blue-rounded-card">
          {/*use the NumberInput and Slider components*/}
          <NumberInput
            value={red}
            onChange={setRed}
            validation={validateValue}
            label={"Red"}
            max={255}
          />
          <Slider
            value={red}
            onChange={setRed}
            color = {`rgb(${red}, 0, 0)`}
          />

          
          <NumberInput
            value={green}
            onChange={setGreen}
            validation={validateValue}
            label={"Green"}
            max={255}
          />
          <Slider
            value={green}
            onChange={setGreen}
            color =  {`rgb(0, ${green}, 0)`}
          />

          
          <NumberInput
            value={blue}
            onChange={setBlue}
            validation={validateValue}
            label={"Blue"}
            max={255}
          />
          <Slider
            value={blue}
            onChange={setBlue}
            color =  {`rgb(0, 0, ${blue})`}
          />
        </div>
        
        {/*Create a circle which has the color of the RGB values selected*/}
        <div className="circle" style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>

      </div>
    </div>
  )
}

export default App
