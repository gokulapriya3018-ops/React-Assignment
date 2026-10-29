import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(null)
  const [bgColor, setBgColor] = useState('#1e293b')

  const add = () => {
    setResult(Number(num1) + Number(num2))
    setBgColor('#15803d')
  }
  const sub = () => {
    setResult(Number(num1) - Number(num2))
    setBgColor('#b91c1c')
  }
  const mul = () => {
    setResult(Number(num1) * Number(num2))
    setBgColor('#1d4ed8')
  }
  const div = () => {
    setResult(Number(num1) / Number(num2))
    setBgColor('#c2410c')
  }
  const reset = () => {
    setNum1('')
    setNum2('')
    setResult(null)
    setBgColor('#1e293b')
  }
  return (
    <div className="app-container" style={{ backgroundColor: bgColor }}>
      <div className="calculator-box">
        <h2>Simple Calculator</h2>
        <div className="inputs">
          <input
            type="number"
            placeholder="Enter first number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter second number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <div className="btn-group">
          <button className="btn add-btn" onClick={add}>Add</button>
          <button className="btn sub-btn" onClick={sub}>Sub</button>
          <button className="btn mul-btn" onClick={mul}>Mul</button>
          <button className="btn div-btn" onClick={div}>Div</button>
          <button className="btn reset-btn" onClick={reset}>Reset</button>
        </div>
        {result !== null && (
          <div className="result-box">
            <span>Result:</span>
            <h1>{result}</h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
