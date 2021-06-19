import React, { useState } from 'react'
import styled from 'styled-components'
import './app.css'

const Container = styled.div`
  padding: 200px;
  border-radius: 3px;
  border: 2px solid cornflowerblue;
`

const dark = {
  backgroundColor: "#222",
  color: "#eee"
}

const light = {
  backgroundColor: "#eee",
  color: "#222"
}

const App = () => {
  const [text, setText] = useState('Light')
  const [bg, setBg] = useState(light)

  const handleClick = () => {
    text === "Light" ? setText('Dark') : setText("Light")
    bg === dark ? setBg(light) : setBg(dark)
  }

  return (
    <>
    <button type="button" className="btn" onClick={handleClick}>
      switch
    </button>
    <Container style={bg}>
      <h1>{text}</h1>
      <h1>Theme</h1>
    </Container>
    </>
  )
}

export default App