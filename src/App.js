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

  onChangeLastName = (event) => {
    const input = event.target
    const newLastName = input.value.trim()
    this.setState((prevState)=> {
      const user = prevState.user
      user.lastName = newLastName
      return {
        user:user
      }
    })
  }

  onChangeProfileImageURL = (event) => {
    const input = event.target
    const newProfileImageURL = input.value.trim()
    this.setState((prevState)=> {
      const user = prevState.user
      user.profileImageURL = newProfileImageURL
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
          First Name:
          {''}
        <input value={user.firstName}
        onChange={this.onChangeLastName}/>
        </label>       
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label>
          Last Name:
          {''}
        <input value={user.lastName}
        onChange={this.onChangeLastName}/>
        </label>
        <br/>
        <br/> 
        <label>
          Image url:
          {''}
        <input value={user.profileImageURL}
        onChange={this.onChangeProfileImageURL}/>
        </label>
      </div>
    );
  }
}

export default App;
