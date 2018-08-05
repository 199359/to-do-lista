import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import List from './Components/List'
import AppBar from 'material-ui/AppBar';

class App extends Component {
  state = {
    newTaskName: 'nowy task',
    tasks: [
      {
          name: 'umyj gary',
          key: 'u9h49uh98rh4'
      },
      {
        name: 'umyj gary999',
        key: 'u9h49uh98rh4'
    }
    ]
  }

  onNewTaskChange=(event, newValue) => {
    this.setState({newTaskName: newValue})
    
  }

addTask=(value)=>{
  let newTask = {name: value, key: 'u9h49uh98rh4'}
  let newState = this.state.tasks.push(newTask)
  this.setState({newState})
  
}

  render() {
    return (
      <div className="App">
        <AppBar
          title="ToDo lista"
        />
        <Form 
        onNewTaskChange={this.onNewTaskChange}
        newTaskName={this.state.newTaskName}
        addTask={this.addTask}
        />
        <List 
          tasksList={this.state.tasks}
        />
      </div>
    );
  }
}

export default App;
