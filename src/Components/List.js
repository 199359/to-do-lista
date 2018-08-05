import React from 'react'
import Task from './Task'

const List = (props) => (
    <div>
        {props.tasksList.map(tasks => <Task
            markTaskAsCompleted={() => props.markTaskAsCompleted(tasks.uid)}
            deleteTask={() => props.deleteTask(tasks.uid)}
            tasks={tasks} />)}
    </div>
)

export default List