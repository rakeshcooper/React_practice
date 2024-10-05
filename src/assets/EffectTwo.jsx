import { useEffect,useState } from "react"

function EffectTwo(){

    const [width, setWidth] = useState(window.innerWidth)
    const [height,setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener("resize", changeHandler)
        // document.title = `Width ${width} and height ${height}`

        console.log("Event listener added");
        
        return() => {
            window.removeEventListener("resize", changeHandler)
            console.log("Event listener removed");
        }

    },[])

    function changeHandler(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }    

    return(
        <div>
            <h3>Windows inner width: {width}px</h3>
            <h3>Windows inner height: {height}px</h3>
        </div>
    )

}

export default EffectTwo