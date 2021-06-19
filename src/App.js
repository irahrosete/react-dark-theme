import React, { useState } from 'react'
import styled from 'styled-components'
import './app.css'

const Container = styled.div`
  padding: 200px;
  background-color: #222;
  color: #eee;
  border-radius: 3px;
  border: 2px solid cornflowerblue;
`

const App = () => {
  const [text, setText] = useState('Light')

  const handleClick = () => {
    text === "Light" ? setText('Dark') : setText("Light")
  }

  return (
    <>
    <button type="button" className="btn" onClick={handleClick}>
      switch
    </button>
    <Container>
      <h1>{text}</h1>
      <h1>Theme</h1>
    </Container>
    </>
  )
}

export default App
