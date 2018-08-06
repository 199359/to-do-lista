import React from 'react'



const Task = (props) => (
    
    <div style={props.tasks.isCompleted===true ? {textDecorationLine: 'line-through'} : {textDecorationLine: 'none'}}>
        <span  onClick={() => {
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