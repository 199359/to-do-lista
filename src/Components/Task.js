import React from 'react'

const List = (props) => (
    <div>
        {console.log('task: ' + JSON.stringify(props))}
        <p>{props.tasks.name}</p>
    </div>
)

export default List