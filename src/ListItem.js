
import React,{ Component } from "react";

class ListItem extends Component{
    createTasks(item){
        return <li key={item.key}>{item.value}</li>;
    }

    render(){
        var todoItems = this.props.itens
        var listItems = "";
       // var listItems = todoItems.map(this.createTasks)

       //todoItems.;
       
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default ListItem