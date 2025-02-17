import { useState } from "react";
import './style.css'
import ToDoItem from "./ToDoItem";

function ToDoList(){

    const [inputValue,setInputValue]=useState("")
    const [editValue,setEditValue]=useState(null)
    const [todo,setTodo]=useState([]);

    function handleSubmit(){
        if(editValue!==null){
            const updatedTodo=[...todo];
            updatedTodo[editValue].text=inputValue;
            setTodo(updatedTodo);
            setEditValue(null)

        }else{
            setTodo([...todo,{text:inputValue,completed:false}])

        }
        setInputValue("")
    }

    function handleDelete(index){
        setTodo(todo.filter((item,index1)=>index1!=index));
    }

    function handleComplete(index){
      const updatedTodo=[...todo];
      updatedTodo[index].completed=!updatedTodo[index].completed;
      setTodo(updatedTodo);
    }

    function handleEdit(index){
        const item=todo.find((item,index1)=>index1==index);
        if(item){
            setInputValue(item.text)
            setEditValue(index)
        }
    }

    return (
        <div className="Todoitem">
            <div className="tododiv">
                <input type="text" name="" id="input" onChange={(e)=>setInputValue(e.target.value)} value={inputValue} />
                <button onClick={handleSubmit} className="submitBtn">Add</button>
            </div>
            <div className={todo.length>0 ? "todoComponent" : ""}>
                <ToDoItem todo={todo}  deletBtn={handleDelete} toggleBtn={handleComplete} handleEdit={handleEdit}/>
            </div>

        </div>
    )
    
    
}

export default ToDoList;