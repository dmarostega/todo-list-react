import  React, { Component }  from 'react';
import AddItemContainer from "./AddItemContainer";

import List from "./List";

class TodoContainer extends Component{
    render(){
        return (
            <div>
                <AddItemContainer />
                <List />
            </div>
        )
    }
}

export default TodoContainer;