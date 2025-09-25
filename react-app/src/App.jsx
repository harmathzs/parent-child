import React from 'react'

import Parent from './components/Parent/Parent'
import Child from './components/Child/Child'

import './App.css'

export default class App extends React.Component {
  state = {
    name: 'App'
  }

  handleChildHungry = child => {
    console.log('handleChildHungry child, name', child, child.props.name)
    // Why props and not state.name is Tim?
  }

  render() {
    return (
      <>
        <div className="card">
          <Parent>
            <Child 
              name="Tim" 
              parent={this} 
              onHungry={this.handleChildHungry}>
                child content text
            </Child>
            <Child 
              name="John" 
              parent={this} 
              onHungry={this.handleChildHungry}>
                child content text
            </Child>
            <Child 
              name="Meg" 
              parent={this} 
              onHungry={this.handleChildHungry}>
                child content text
            </Child>
            <p>paragraph content</p>
            parent content text
          </Parent>
        </div>
      </>
    )
  }
}

