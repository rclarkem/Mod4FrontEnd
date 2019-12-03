import React, { Component } from 'react'
import Input from './components/Input'
import Header from './components/Header'
import ListContainer from './components/ListContainer';

export default class App extends Component {
  
  state = {
    messages: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/tasks')
			.then((response) => response.json())
      .then((response) => {
        this.setState({
          messages: response
        })
      });
  }

  userInput = (e) => {
    e.preventDefault()
    this.setState({
      messages: [...this.state.messages, { taskname: e.target.name.value }]
    })
  }
  

  render() {
    console.log(this.state.messages)
    return (
      <div>
        <Header />
        <Input userInput={this.userInput}/>
        <ListContainer todoItems={this.state.messages} />
      </div>
    )
  }
}

