import React from "react";
import { useState } from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer"

import AddItems from "./AddItems";
function App(){

  function handleNameChange(){
    const names = ["earm", "grow", "give"]
    const int = Math.floor (Math.random()*3)
    return names[int]
  }
  const [name, setName] = useState('earn')
  function change(){
    const names = ["earm", "grow", "give"]
    const int = Math.floor (Math.random()*3)
    setName(names[int])
  }
  
    const [count, setCount] = useState(55)
  function increace(){
    setCount (prevCount => prevCount + 1)
  }
  function decreace(){
    setCount (prevCount => prevCount - 1)
  }


  // list items

  const [items, setItems] = useState(
    [
        {
            id: 1,
            checked: true,
            item: "today is my day"
        },
        {
            id: 2,
            checked:false,
            item: "today is my day"
        },
        {
            id: 3,
            checked: false,
            item: "today is my day"
        }
    ]);
    const [newItems, setNewItems] = useState('')
    const addItems = (item) =>{
      const id =items.length ? items[items.length - 1].id + 1 : 1;
      const addNewItems = {id, checked:false, item}
      const listItems = [...items, addNewItems]
      setItems(listItems)
    }

    const handleCheck = (id) =>{
    const listItems = items.map((item) =>
      item.id===id ? {...item, checked:!item.checked} :item)
      setItems(listItems)
      localStorage.setItem("todo_list", JSON.stringify(listItems))
    }
    const handleClick = (id) =>{
        const deleteItems = items.filter((item) =>
        item.id!== id)
        setItems(deleteItems)
        localStorage.setItem("todo_list", JSON.stringify(deleteItems))
    }
    const handleSubmit = (e)=>{
      e.preventDefault()
     addItems(newItems)
      if (!newItems) return
      setNewItems('')
      console.log(newItems)
    }

  return (
    <>
    <h1>Subscribe pannunga</h1>
    <p>You {handleNameChange()} Money</p>
    <button onClick={decreace}>-</button>
    <span>{count}</span>
    <button onClick={increace}>+</button>
    <button onClick={change}>change</button>

    <Content 
     items ={items}
     
     handleCheck = {handleCheck}
     handleClick = {handleClick}
    />
    <Header />
    <AddItems
    newItems ={newItems}
    setNewItems = {setNewItems}
    handleSubmit = {handleSubmit}

    />
    <Footer
    length = {items.length}
    />
    </>
    
  )

  
}


export default App;