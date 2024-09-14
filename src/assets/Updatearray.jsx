import { useState } from "react"
function Updatearray(){
    const [foods, setFoods] = useState(["apple","bananna","orange","limes"])
    

    function removeFood(food){
        setFoods(foods.filter((ele,i) => food != ele) )
    }

    function addFood(){
        const foodValue = document.getElementById("foodInput").value
        document.getElementById("foodInput").value = ""

        setFoods(f => [foodValue, ...f])
    }

    return(<div>
                <ul>
                    {foods.map( (food,index) => 
                        <li onClick={() => removeFood(food)} key={index}>{food}</li>
                    )}
                </ul>
                <input type="text" id="foodInput" /><button onClick={addFood}>Add food</button>        
        </div>)
}

export default Updatearray