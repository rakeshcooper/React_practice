import { useState } from "react";

function Nestedarrayofobject(){
    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    function handleAddcar(){
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel};

        setCars((c) => [...c, newCar])

        // setCarYear(new Date().getFullYear())
        // setCarMake("")
        // setCarModel("")
    }

    function handleRemovecar(newIndex){
        setCars(cars.filter((ele,index) => index !=newIndex))
    }

    function handleYearchange(e){
        setCarYear(e.target.value)
    }

    function handleMakechange(e){
        setCarMake(e.target.value)
    }

    function handleModelchange(e){
        setCarModel(e.target.value)
    }

    return(
        <div>
            <input type="number" onChange={handleYearchange} value={carYear}/><br />
            <input type="text" onChange={handleMakechange} placeholder="Car Make"/><br />
            <input type="text" onChange={handleModelchange} placeholder="Car Model"/><br />
            <button onClick={handleAddcar}>Add Car</button>
            <h2>List of the car object</h2>
            <ul>
            {cars.map((car,index) => 
            <li key={index} onClick={() => handleRemovecar(index)}>{car.year} {car.make} {car.model}</li>)}
            </ul>

        </div>
    )
}

export default Nestedarrayofobject