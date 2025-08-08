import { useState } from 'react'
import './App.css'
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
  

  //return the React component
  return (
    
    <div style = {{ width: "100%", height: "600px", padding: "30px", display: "flex", flexDirection: "row",
      gap: "50px", justifySelf: "center", justifyContent: "center", alignContent: "center"}}>
      
      <div style={{width: "300px", height: "min-content", alignSelf: "center", display: "flex", flexDirection: "column", gap: "20px", background: "grey", borderRadius: "70px", padding: "30px"}}>
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
      <div style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`, width: "200px", height: "200px", borderRadius: "50%", alignSelf: "center"}}/>

    </div>
  )
}

export default App
