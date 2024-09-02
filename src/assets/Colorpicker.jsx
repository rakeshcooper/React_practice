import { useState } from "react";


function colorPicker(){

    const [boxColor, setboxColor] = useState("#FFFFFF")

    function colorHandler(e){
        setboxColor(e.target.value)
    }

    return(
        <div>
            <h2>Color Picker</h2>
            <div className="colorBox" style={{backgroundColor: boxColor}}></div>
            <input type="color" value={boxColor} onChange={colorHandler}/>
        </div>
    )    
}

export default colorPicker