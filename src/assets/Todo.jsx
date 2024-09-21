import { useState } from "react"

function Todo(){
    const [tasks, setTasks] = useState(["apple"])
    return(<div>
        <h2>Todo list added</h2>
        <input type="text" />
        <button>Add</button>
        <ul>
            {tasks.map((task,index) => {
                <li><span>{index}</span>
                    <button>delete</button>
                </li>
                
            })}
        </ul>
    </div>)
}

export default Todo