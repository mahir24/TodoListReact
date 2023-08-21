import { useState } from 'react'

export function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault() //prevents reloading the page when adding new item   
        if(newItem === "") return

        onSubmit(newItem)

        setNewItem("")//clear textbox after adding item
    }

    return (
    <form onSubmit = {handleSubmit} className = "new-item-form">
    {/*Render out the html  */}
     <div className='form-row'>
      <label htmlFor= "item">New Item</label>
      <input value = {newItem}
       onChange = {e => setNewItem(e.target.value)}
       type = "text"
        id = "item"/>
     </div>
    <button className="btn">Add</button>
  </form>
  )

}