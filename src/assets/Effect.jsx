import { useState,useEffect } from "react"


function Effect(){
    const[count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count: ${count}`
    })

    function increaseHandler(){
        setCount(count => count + 1)
    }

    return(
    <div>
        <p>Count: {count}</p>
        <button onClick={increaseHandler}>Add count</button>
    </div>
 )
}

export default Effect