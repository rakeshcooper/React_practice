import { useRef ,useEffect} from "react"

function Testref(){
    // const inputRef = useRef(null)
    const count = useRef(0)
    
    useEffect(
        ()=>{
            console.log("component rendered");
             
        }
    )

    function handlerClick(){
        inputRef.current.focus()
    }

    function handlerCount(){
        count.current = count.current + 1 
        console.log("cooper");
        
    }

    return(<div>
       {/* <input ref={inputRef} type="text" onChange={() => console.log("done")} />
       <button  onClick={handlerClick}>Click me</button> */}
       <h2>{count.current}</h2>
       <button onClick={handlerCount}>add++</button>
    </div>)

}
export default Testref