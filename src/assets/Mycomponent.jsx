import { useState } from "react"
function Mycomponent(){
    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState(0)
    const [payment, setPayment] = useState("Mastero")
    function changeHandler(e){
        setName(e.target.value)
    }

    function changeQuantityHandler(e){
        setQuantity(e.target.value)
    }

    function changePaymentHandler(e){
        setPayment(e.target.value)
    }
    
    return(
        <div>
            <input type="text" value={name} onChange={changeHandler}/>
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={changeQuantityHandler}/>
            <p>Number: {quantity}</p>

            <select value={payment} onChange={changePaymentHandler}>
                <option value="Visa">Visa</option>
                <option value="Mastero">Mastero</option>
                <option value="Rupay">Rupay</option>
            </select>

            <p>Payment: {payment}</p>
        </div>
    )
    
}

export default Mycomponent