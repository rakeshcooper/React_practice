import { useState } from "react";

function Nestedarrayofobject(){
    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")
    return(
        <div>
            <ul>
                <li>sample</li>
            </ul>
        </div>
    )
}

export default Nestedarrayofobject