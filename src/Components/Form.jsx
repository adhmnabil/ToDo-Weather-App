import React from "react";

const Form = ({setInputText , setTodos  , todos , inputText , setStatus})=>{


const today = new Date();
const date = today.getDate();
const month = today.getMonth() + 1; 
const year = today.getFullYear();
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

// Combine the date, month, year, hours, minutes, and seconds into a single string
const dateString = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;


  const inputTextHandler =(e)=>{
    setInputText(e.target.value)
  }
  const submitHandler = (e)=>{
    e.preventDefault()
    setTodos([
      ...todos , {text: inputText , completed:false , id:Math.random()*1000 , date:dateString}
    ])
    setInputText("")
  }
  const statusHandler = (e)=>{
    setStatus(e.target.value)
  }
    return (
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button className="todo-button" onClick={submitHandler} type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}

export default Form