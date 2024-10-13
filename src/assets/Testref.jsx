import { useRef } from "react"

function Testref(){
    const inputRef = useRef()
    return(<div>
       <input type="text" />
       <button>Click me</button>
    </div>)

}
export default Testref