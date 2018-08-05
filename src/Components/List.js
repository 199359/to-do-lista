import React from 'react'
import Task from './Task'

const List = (props) => (
    <div>
        {props.tasksList.map(tasks=> <Task tasks={tasks}/>)}
        
    </div>
)

export default List