import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItems = ({newItems, setNewItems, handleSubmit}) => {
  return (
    <form >
        <label htmlFor="addItems" onSubmit={handleSubmit}></label>
        <input 
        autoFocus
        id='addItem'
        type="text"
        placeholder='Add Items'
        value={newItems}
        onChange={(e) => setNewItems(e.target.newItems) }
        required
        />
        <button
        type='submit'
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItems