import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <MuiThemeProvider>
        <App
        numberOnStart = {typeof(localStorage.toDoItems) !== 'string' ?  [{
              name: 'Test',
              uid: Date.now(),
              isCompleted: false
            }]
          : JSON.parse(localStorage.toDoItems)}       
        />
    </MuiThemeProvider>,
    document.getElementById('root'));

