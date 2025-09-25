import React from 'react'

import Parent from './components/Parent/Parent'
import Child from './components/Child/Child'

import './App.css'

export default class App extends React.Component {
  state = {
    name: 'App'
  }

  render() {
    return (
      <>
        <div className="card">
          <Parent>
            <Child name="Tim">child content text</Child>
            <Child name="John" parent={this}></Child>
            <Child name="Meg"></Child>
            <p>paragraph content</p>
            parent content text
          </Parent>
        </div>
      </>
    )
  }
}

