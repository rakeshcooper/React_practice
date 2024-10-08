import { useState } from "react"

function Todo(){
    const [tasks, setTasks] = useState(["apple","orange"])
    const [newTask, setNewtask] = useState("")
    
    function inputHandlerChange(event){
        setNewtask(event.target.value)
    }

    function addTask(){
        if(newTask.length != 0){
            setTasks(t => [...t, newTask])
            setNewtask("")
        }
    }

    function removeArray(index){
        setTasks(tasks.filter((_,i) => i !== index) )
    }
    
    return(<div>
        <h2>Todo list added</h2>
        <input onChange={(event) => inputHandlerChange(event)} type="text" />
        <button onClick={() => addTask()}>Add</button>
        <ul>
            {tasks.map((task,index) => 
                <li key={index}>
                    <span>{task}</span>
                    <button onClick={()=> removeArray(index)}>delete</button>
                </li>    
            )}
        </ul>
    </div>)
}

export default Todo