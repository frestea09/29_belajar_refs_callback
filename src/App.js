import React from 'react'
import Content from './Component/Content'
class App extends React.Component{
  constructor(){
    super()
    this.inputRef = React.createRef()
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(){
    this.inputRef.current.focus()
  }
  render(){
    return(
      <div>
        <Content ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Focus</button>
      </div>
    )
  }
}

export default App