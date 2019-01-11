import React from "react";

class List extends React.Component{
    render(){
        var todoItems = this.props.entries;
        var listItems = todoItems.map(item => 
            <li key={item.key}>{item.value}</li>
        );

        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default List;
