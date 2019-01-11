import  React, { Component }  from 'react';
import AddItemContainer from "./AddItemContainer";

import List from "./List";

class TodoContainer extends Component{

    constructor(props){
        super(props)
        this.input = React.createRef();

        this.addItem=this.addItem.bind(this);

        this.state = {
            itens:[]
        };
    }

    addItem(e){
        e.preventDefault();
        var newItem =   {
                            key: Date.now(),
                            value: this.input.current.value
                        };

        this.setState((p) => {
            return{
               itens:p.itens.concat(newItem)
            };
        });        
    }

    render(){
        return (

            <div className="todoList">
                <div className="header">
                <form onSubmit={this.addItem}>
                    <input type="text" name="taskName" ref={this.input}/>
                    <button type="submit">Add</button>               
                </form>
                <List entries={this.state.itens} />
                </div>
            </div>
        )
    }
}
export default TodoContainer;