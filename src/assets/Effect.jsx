import { useState,useEffect } from "react"


function Effect(){
    const[count, setCount] = useState(0)
    const [color,setColor] = useState("green")

    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    },[count,color])

    function increaseHandler(){
        setCount(count => count + 1)
    }

    function decreaseHandler(){
        setCount(count => count - 1)
    }

    function changeColor(){
        setColor( color => color === "green" ? "red" : "green")
    }

    return(
    <div>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={decreaseHandler}>Sub count</button>
        <button onClick={increaseHandler}>Add count</button>
        <button onClick={changeColor}>changeColor</button>
    </div>
 )
}

export default Effect