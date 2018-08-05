import React from 'react'
import Task from './Task'

const List = (props) => (
    <div>
        {console.log(props)}
        {props.tasksList.map(tasks=> <Task tasks={tasks}/>)}
        <button onClick={() => alert('Usuń')}>Usuń</button>
    </div>
)

export default List