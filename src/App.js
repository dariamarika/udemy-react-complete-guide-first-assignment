import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    firstname: 'My boyfriend is',
    username: 'a bulldog'
  }

  changeInputHandler = (event) => {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <UserInput username={this.state.username} changed={this.changeInputHandler}/>
        <UserOutput firstname={this.state.firstname} username={this.state.username}/>       
      </div>
    );
  }
}

export default App;
