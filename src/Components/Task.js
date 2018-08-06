import React from 'react'


const Task = (props) => (
    <div>
        <span onClick={() => {
            props.markTaskAsCompleted()
        }}>
            {props.tasks.name}
        </span>
        <button onClick={() => (
            props.deleteTask()
            )}>Usuń</button>
    </div>
)

export default Task