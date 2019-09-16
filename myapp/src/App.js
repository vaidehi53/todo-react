import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftPannel from './component/leftPannel'
import CenterPannel from './component/centerPannel'
import RightPannel from './component/rightPannel'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 'one', name: 'onec', isActive:false },
        { id: 'two', name: 'twoss', isActive:false }
      ]
    }
    this.handleChange = this.handleChange.bind(this)
    this.pushto = this.pushto.bind(this)

  }

  handleChange(id,e){
    // on check of list will go to center panel
    let indexOf = this.state.list.findIndex(item=> item.id===id)
    let newVal ={ ...this.state.list[indexOf], isActive: e.target.checked }

    let newList = [
      ...this.state.list.slice(0, indexOf),
      newVal,
      ...this.state.list.slice(indexOf + 1, this.state.list.length)
    ]
    this.setState({list:newList})

  }


  pushto(value){

    this.setState({
      list: [...this.state.list, {
        isActive:false,
        id: 'ss'+value,
        name: value
      }

      ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className='asd'>
        <LeftPannel list = {this.state.list} changeClick = {this.handleChange} />
        <CenterPannel list= {this.state.list} />
        <RightPannel some={this.pushto} />
      </div>
      </div>
    );
  }
}

export default App;
