import React from 'react'

const taskDone = () => {
    console.log(document.querySelector('span').style.textDecoration !== 'line-through')
    document.querySelector('span').style.textDecoration !== 'line-through' ? document.querySelector('span').style.textDecoration = 'line-through' : document.querySelector('span').style.textDecoration = 'none'
    console.log(document.querySelector('span').style.textDecoration !== 'line-through')
}



const Task = (props) => (
    <div>
        <span style={this.style} onClick={() => {this.style.textDecoration='line-through'}}>
            {props.tasks.name}
        </span>
        <button onClick={() => (
            props.deleteTask()
            )}>Usuń</button>
    </div>
)

export default Task