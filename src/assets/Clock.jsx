import { useEffect,useState } from "react"

function Clock(){

    const [time, setTime] = useState(new Date())

    useEffect(() =>{
        let intervalID = setInterval(() => {
            setTime(new Date())
        },1000)

        return() => {
            clearInterval(intervalID)
        }
    },[])

    function formatTime(){
        let hours = time.getHours();
        let mins = time.getMinutes();
        let sec = time.getSeconds();
        return `${hours} : ${mins} : ${sec}` 
    }

    return(
        <div>
            <h2>time</h2>
            <h1>{formatTime()}</h1>
        </div>
    )
}

export default Clock