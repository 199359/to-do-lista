import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
  };

const Form = (props) => (
    <div>
        <TextField
            hintText="Wpisz zadanie do wykonania"
        />
        <RaisedButton label="Dodaj" style={style} onClick={() => alert('Click')}/>    </div>
)

export default Form