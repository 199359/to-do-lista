import React from 'react'
import Task from './Task'

const List = (props) => (
    <div>
        <Task />
        <button onClick={() => alert('Usuń')}>Usuń</button>
    </div>
)

export default List