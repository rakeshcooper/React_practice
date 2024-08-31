function List(props){
    let count = 0
    function handler(){
        if(count< 3){
            count+=1
            console.log(`bro u clicked me ${count} times`);    
        }
        
        
    }
    const itemLists = props.item
    const categories = props.category
    let listItems = itemLists.map((itemList) =>{ return <li key={itemList.id}>{itemList.name} &nbsp;:<b>{itemList.calories}</b></li>})
    return(<>
                <h3>{categories}</h3>
                <ul>{listItems}</ul>
                <button onClick={() => handler()}>Click me 😎</button>
          </>)
}

List.defaultProps = {
    item: [{name: "Empty list"}],
    category : "category is not listed"
}

export default List