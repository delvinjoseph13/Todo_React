function ToDoItem(props){
    return (
        <div>
            {
              props.todo.map((item,index)=>(
                <div key={index}  className="todoitem">
                    <ul className="listItem">
                       <li>
                        <input type="checkbox" 
                        name="" className="checkbox"
                        checked={item.completed}
                        onChange={()=>props.toggleBtn(index)}
                        />
                        <span style={{textDecoration: item.completed ? "line-through" : "none " ,marginLeft:"10px",fontSize:"22px",marginBottom:"2px"}}>
                        {item.text}
                        </span>
                        
                       </li>
                       <button className="deleteBtn" onClick={()=>props.deletBtn(index)}>Delete</button>
                       <button className="editBtn" onClick={()=>props.handleEdit(index)}>Edit</button>

                    </ul>
                    
                </div>
              )

              )
            }
           
        </div>
    )
}

export default ToDoItem;