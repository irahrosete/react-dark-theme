import React from 'react'
import styled from 'styled-components'
import './app.css'

const Container = styled.div`
  display: flex;
  padding: 400px 500px;
  background-color: #222;
  color: #eee;
`

const App = () => {
  return (
    <Container>
      <h1>Light Theme</h1>
      <div>
        <button type="button" className="btn">switch</button>
      </div>
    </Container>
  )
}

export default App
