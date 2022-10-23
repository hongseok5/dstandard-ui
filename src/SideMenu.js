import React from 'react'
import './App.css'


function SideMenu(props){

    // use defined css class
    return (
    <div className="norm-div">
        {/** jsx internal juseok */}
      <ul>   
        <li>
            {props.list[0]}
        </li>
        <li>
            {props.list[1]}
        </li>
        <li>
            {props.list[2]}
        </li>
        <li>
            {props.list[3]}
        </li>
      </ul>
    </div>
    );
}

export default SideMenu;
