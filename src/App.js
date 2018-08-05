import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import List from './Components/List'
import AppBar from 'material-ui/AppBar';

class App extends Component {
  state ={
    tasks: [
      {
          name: 'umyj gary',
          key: 'u9h49uh98rh4'
      },
      {
        name: 'wynies smieci',
        key: 'u9h49uh98rh4'
    }
    ]
  }

  render() {
    return (
      <div className="App">
        <AppBar
          title="ToDo lista"
        />
        <Form 
        />
        <List 

        />
      </div>
    );
  }
}

export default App;
