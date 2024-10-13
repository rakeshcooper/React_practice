import { useState , createContext} from "react"
import ComB from "./ComB"

export const userContext = createContext()

function ComA(){
    const [user, setUser] = useState("Bro")
    return(
        <div className="box">
            <h3>Component A</h3>
            <h2>{`Hello ${user}`}</h2>
            <userContext.Provider value={user}>
                <ComB />
            </userContext.Provider>
        </div>
    )
}

export default ComA