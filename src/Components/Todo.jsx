import  React  from 'react';

const Todo = ({text, todo , todos , setTodos , date , setInputText})=>{
    const deleteHandler = ()=>{
        setTodos(todos.filter((el) => el.id !== todo.id))
    }
    const completeHandler = ()=>{
        setTodos(todos.map((item) =>{
            if(item.id === todo.id){
                return{
                    ...item , completed:!item.completed
                };
            } 
            return item;
        }))
    }
    const editHandler = (e)=>{
        setInputText(text)
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

return(
<div className='todo'>
    <li className={`todo-item ${todo.completed ? "completed": ""}`}>{text} <span>{date}</span></li>
    <button onClick={editHandler} className='trash-btn'><i className="fas fa-edit"></i></button>
    <button onClick={completeHandler}  className='complete-btn'><i className='fas fa-check'></i></button>
    <button onClick={deleteHandler} className='trash-btn'><i className='fas fa-trash'></i></button>
</div>
);
}

export default Todo;