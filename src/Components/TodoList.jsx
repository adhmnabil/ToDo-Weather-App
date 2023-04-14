import React from "react";
import Todo from './Todo';


const TodoList = ({todos , setTodos , filteredTodos , setInputText})=>{
    return(
        <div className="todo-container">
        <ul className="todo-list">
            {filteredTodos.map(todo => (
                <Todo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} date={todo.date} setInputText={setInputText}/>
            ))}
        </ul>
      </div>
    )
}

export default TodoList;