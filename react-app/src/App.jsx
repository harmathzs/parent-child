import { useState } from 'react'

import Parent from './components/Parent/Parent'
import Child from './components/Child/Child'

import './App.css'

function App() {
  return (
    <>
      <div className="card">
        <Parent>
          <Child name="Tim">child content text</Child>
          <Child name="John"></Child>
          <Child name="Meg"></Child>
          <p>paragraph content</p>
          parent content text
        </Parent>
      </div>
    </>
  )
}

export default App
