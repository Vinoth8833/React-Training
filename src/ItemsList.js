import React from "react";
import LineItems from './LineItems';

const ItemsList = ({items, handleCheck, handleClick}) => {

    
  return (
    <ul>
    {items.map((item) =>
    <LineItems
    item ={item}
    key={item.id}
    handleCheck = {handleCheck}
    handleClick = {handleClick}
    />
    )}
</ul>

  )
}

export default ItemsList