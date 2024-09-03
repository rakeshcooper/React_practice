import { useState } from "react"

function Component(){

    const [name, setName] = useState("guest")
    const [age, setAge] = useState(0)
    
    function changeName(){
        setName(" Cooper")
    }
    
    function incrementAge(){    
        setAge(age => age + 1)
        setAge(age => age + 1)
    }

    function decrementAge(){    
        setAge(age - 1)
    }

    function resetAge(){
        setAge(0)
    }
    return(
        <div>
            <p>name: {name}</p>
            <button onClick={changeName}>Click me</button>
            <p>age: {age}</p>
            <button onClick={incrementAge}>Increment age</button>
            <button onClick={resetAge}>Reset age</button>
            <button onClick={decrementAge}>Decrement age</button>
        </div>
    )
}

export default Component