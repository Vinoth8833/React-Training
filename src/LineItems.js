import React from "react";
import { FaTrashAlt } from "react-icons/fa";



const lineItems = ({item, handleCheck, handleClick}) => {
  return (
    <li key={item.id}>
        <input
        type="checkbox"
        checked={item.checked}
        onChange={() =>handleCheck(item.id)}
        ></input>
        <label
        onDoubleClick={() =>handleCheck(item.id)}
        >{item.item}</label>
        <FaTrashAlt

        type="button"
        onClick={() =>handleClick(item.id)}
         />
    </li>
  )
}

export default lineItems