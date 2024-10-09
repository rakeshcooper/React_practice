import { useContext } from "react"
import { userContext } from "./ComA"

function ComC(){
    const user = useContext(userContext)
    return(
        <div className="box">
            <h3>Component C</h3>
            <h2>{`Bye ${user}`}</h2>
        </div>
    )
}

export default ComC