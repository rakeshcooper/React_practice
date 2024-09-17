import Header from "./assets/Header.jsx"
import Button from "./Button/button.jsx"
import Student from "./assets/Student.jsx"
import UserGreeting from "./assets/UserGreeting.jsx"
import List from "./assets/List.jsx"
import Component from "./assets/component.jsx"
import Mycomponent from "./assets/Mycomponent.jsx"
import Colorpicker from "./assets/Colorpicker.jsx"
import Updateobject from "./assets/Updateobject.jsx"
import Updatearray from "./assets/Updatearray.jsx"
import Nestedarrayofobject from "./assets/Nestedarrayofobjects.jsx"
import Todo from "./assets/Todo.jsx"

function App() {
    const fruits = [{id:0, name:"apple", calories: 95},
        {id:1, name:"orange", calories: 45},
        {id:2, name:"banana", calories: 105},
        {id:3, name:"coconut", calories: 159},
        {id:4, name:"pineapple", calories: 37}]

    const Vegetables = [{id:5, name:"potato", calories: 110},
            {id:6, name:"carrot", calories: 59},
            {id:7, name:"beetroot", calories: 60},
            {id:8, name:"spinech", calories: 25},
            {id:9, name:"eggplant", calories: 47}]    
 return(
    <>
        {/* <Header />
        <Button />
        <Student name=" Cooper" age={26} isStudent={true}/>
        <Student /> 
        <UserGreeting name="cooper" isLoggedin={true}/>
        {fruits.length > 0 && <List item={fruits} category="fruits"/>}
        {Vegetables.length > 0 && <List item={Vegetables} category="Vegetables"/>}
        <Mycomponent />    
        <Component /> 
        <Colorpicker />   
        <Updateobject /> 
        <Updatearray /> 
        <Nestedarrayofobject /> */}
        <Todo />
    </> )
}

export default App
