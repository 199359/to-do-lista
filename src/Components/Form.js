import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};

const Form = (props) => (
    <div>
        <TextField
            value={props.newTaskName}
            hintText="Wpisz zadanie do wykonania"
            onChange={props.onNewTaskChange}
        />
        <RaisedButton label="Dodaj" style={style} onClick={() => (
            props.addTask(props.newTaskName)
            )} />
            {console.log(props)}
    </div>
)

export default Form