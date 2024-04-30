import React from "react";

function Footer({length}){
    
    const item =  (length===1 ? "item" : "items")  
    
    
    

    return(
        <>
        <p >{length} List {item}</p>
        </>
    )
}

export default Footer;