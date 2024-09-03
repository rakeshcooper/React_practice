import { useState } from "react"

function Updateobject(){

    const [car, setCar] = useState({make:"Ford",
        year:2024,
        model:"Mustang"
    })

    const changeyearHandler = (e) => {
        setCar(c => ({...c, year:e.target.value}))
    }
    const changemakeHandler = (e) => {
        setCar(c => ({...c, make:e.target.value}))
    }
    const changemodelHandler = (e) => {
        setCar(c => ({...c, model:e.target.value}))
    }

    return(
        <div>
            <h3>Car model is {car.make} {car.model} ,year {car.year}</h3>
            <div>
            <input type="number" placeholder={car.year} onChange={changeyearHandler}/><br />
            <input type="text" placeholder={car.make} onChange={changemakeHandler}/><br />
            <input type="text" placeholder={car.model} onChange={changemodelHandler}/>
            </div>
        </div>
        
    )

}

export default Updateobject