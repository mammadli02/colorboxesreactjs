import React, { Component } from 'react'
const colors=["red", "orange", "black", "brown", "blue", "gray", "green"]
export class ColorBoxes extends Component {
    constructor(){
        super()
        this.state ={
            currentData: null,
        }
        this.randomMethod=this.randomMethod.bind(this)
    }
    componentDidMount(){
        this.randomMethod()
    }
    randomMethod(){
let randomNumber=Math.floor(Math.random() * colors.length)
this.setState({currentData : colors[randomNumber]})
    }
  render() {
    return (
      <div style={{width:'150px', height:"150px", background: this.state.currentData}} onClick={this.randomMethod}>ColorBoxes</div>
    )
  }
}

export default ColorBoxes