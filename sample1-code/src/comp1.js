import React from "react";
import "./comp1.css";
const comp1 = (props) =>{
    return(
        <ul>
            {props.list.map((item)=>(<li  id = {item} key={item}>{item}<span onClick = {(event)=>props.removeItem(event)} className="x">X</span></li>))}
        </ul>
    );
}
export default comp1;