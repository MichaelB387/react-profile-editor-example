import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    user: {
      firstName: 'Alice',
      lastName: 'Jones',
      profileImageURL: 'https://randomuser.me/api/portraits/lego/6.jpg'
    }
  }

  onChangeFirstName = (event) => {
    const input = event.target
    const newFirstName = input.value.trim()
    this.setState((prevState)=> {
      const user = prevState.user
      user.firstName = newFirstName
      return {
        user:user
      }
    })
  }
  render() {
    const user = this.state.user

    return (
      <div className="App">
        <h1>Linked In Profile Editor</h1>       
        <img src={user.profileImageURL} alt=''/>
        <p>Name: {user.firstName} {user.lastName}</p>

        <label>
          Frist Name:
          {''}
        <input value={user.firstName}
        onChange={this.onChangeFirstName}/>
        </label>
      </div>
    );
  }
}

export default App;
