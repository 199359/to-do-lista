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
        uid: 'u9h49mkmkuh98rh41',
        isCompleted: false
      },
      {
        name: 'umyj gary999',
        uid: 'u9h49uhiuiuu9u998rh42',
        isCompleted: false
      }
    ]
  }

  onNewTaskChange = (event, newValue) => {
    this.setState({ newTaskName: newValue })
  }

  markTaskAsCompleted = (taskUid) => {
    const clickedTask = this.state.tasks.filter((el)=>{
      return el.uid === taskUid
    })
    console.log(clickedTask)
    clickedTask.map((el)=>(el.isCompleted === true ? el.isCompleted = false : el.isCompleted = true))
    console.log(clickedTask)
    const listOfTasks = this.state.tasks.filter((el)=>{
      return el.uid !== taskUid
    })
    console.log(listOfTasks)
    listOfTasks.push(clickedTask[0])
    console.log(listOfTasks)
  }

  addTask = (value) => {
    let newTask = { name: value, uid: 'u9h49uh98rh4', isCompleted: false }
    let newState = this.state.tasks.push(newTask)
    this.setState({ newState })
  }

  deleteTask = (taskUid) => {
    const newTasks = this.state.tasks.filter((el) => {
      console.log(el.uid)
      console.log(taskUid)
      return taskUid !== el.uid
    })
    this.setState({ tasks: newTasks })
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
          markTaskAsCompleted={this.markTaskAsCompleted}
          deleteTask={this.deleteTask}
          tasksList={this.state.tasks}
        />
      </div>
    );
  }
}

export default App;
