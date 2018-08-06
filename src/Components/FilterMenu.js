import React from 'react'
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


const FilterMenu = (props) => (
    <div>
        <Menu>
            <MenuItem
                primaryText="Pokaż wszystko"
                onClick={() => {
                    alert('jnj')
                }
                }
            />
            <MenuItem
                primaryText="Pokaż wykonane"
                onClick={() => {
                    const isDone = props.tasksList.filter((el) => {
                        return el.isCompleted === true
                    }).map((el => {
                        return '<p>' + el.name + '</p>'
                    }))
                    console.log(isDone)
                }
                }

            />
            <MenuItem
                primaryText="Pokaż niewykonane"
                onClick={() => {
                    const isDone = props.tasksList.filter((el) => {
                        return el.isCompleted === false
                    }).map((el => {
                        return '<p>' + el.name + '</p>'
                    }))
                    console.log(isDone)
                }}

            />
        </Menu>
    </div>
);


export default FilterMenu