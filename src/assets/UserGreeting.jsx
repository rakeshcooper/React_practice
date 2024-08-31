
function UserGreeting(props){
   
const welcome = <p>Welcome {props.name}</p>
const loginPrompt = <p>Please login</p>


    return(props.isLoggedin ? welcome : loginPrompt)
}

export default UserGreeting