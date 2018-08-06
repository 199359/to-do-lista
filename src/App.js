import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import List from './Components/List'
import AppBar from 'material-ui/AppBar';

class App extends Component {
  state = {
    newTaskName: 'nowy task',
    tasks: this.props.numberOnStart
  }



  onNewTaskChange = (event, newValue) => {
    this.setState({ newTaskName: newValue })
  }

  markTaskAsCompleted = (taskUid) => {
    const clickedTask = this.state.tasks.filter((el) => {
      return el.uid === taskUid
    })
    clickedTask.map((el) => (el.isCompleted === true ? el.isCompleted = false : el.isCompleted = true))
    const listOfTasks = this.state.tasks.filter((el) => {
      return el.uid !== taskUid
    })
    listOfTasks.push(clickedTask[0])
    console.log(listOfTasks)
    this.saveOnLocalStorage()
  }

  addTask = (value) => {
    let newTask = { name: value, uid: Date.now(), isCompleted: false }
    let newState = this.state.tasks.push(newTask)
    this.setState({ newState })
    console.log(newTask)
  }

  deleteTask = (taskUid) => {
    const newTasks = this.state.tasks.filter((el) => {
      return taskUid !== el.uid
    })
    this.setState({ tasks: newTasks })
  }

  saveOnLocalStorage = () => {
    // for (let i=0; i=this.state.tasks; i++){
    localStorage.setItem('toDoItems', JSON.stringify(this.state.tasks))
    // localStorage.setItem('toDoListUid', this.state.tasks[i].uid)
    // localStorage.setItem('toDoListIsCompleted', this.state.tasks[i].isCompleted)
  }


  getStateFromLocalStorage = () => {
    const items = localStorage.getItem('toDoItems')
    const newState = JSON.parse(items)
    this.setState(newState)
    console.log(newState)
  }

  render() {
    this.saveOnLocalStorage()
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
