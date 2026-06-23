import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const [shake, setShake] = useState(false)

  const handleTap = () => {
    setCount(c => c + 1)
    setShake(true)
    setTimeout(() => setShake(false), 150)
  }

  const handleDecrement = (e) => {
    e.stopPropagation()
    setCount(c => Math.max(0, c - 1))
    setShake(true)
    setTimeout(() => setShake(false), 150)
  }

  const handleReset = (e) => {
    e.stopPropagation()
    setCount(0)
  }

  return (
    <main className="app" onClick={handleTap}>
      <div className="glass-container">
        <img src="/logo.png" alt="Tap Counter Logo" className="app-logo" />
        <h1 className="title">Tap Counter</h1>
        <div className={`counter-value ${shake ? 'shake' : ''}`}>
          {count}
        </div>
        <p className="subtitle">Tap anywhere</p>
        
        <div className="controls">
          <button className="btn" onClick={handleDecrement}>Decrement</button>
          <button className="btn reset-btn" onClick={handleReset}>Reset</button>
        </div>
      </div>
    </main>
  )
}
