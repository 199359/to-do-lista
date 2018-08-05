import React from 'react'

const List = (props) => (
    <div>
        <span onClick={}>
        {props.tasks.name}
        </span>
        <button onClick={() => alert('Usuń')}>Usuń</button>
    </div>
)

export default List