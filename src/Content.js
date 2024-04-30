

import ItemsList from "./ItemsList";


function Content  ({items,  handleCheck, handleClick})  {
   
    

    return(
        <>
        {(items.length) ? (
       <ItemsList
       items = {items}
       handleCheck = {handleCheck}
       handleClick = {handleClick}
       />
        ) : <p>items is empty</p>
            }
        </>
    )
}
export default Content;