import  React, { Component }  from 'react';
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

        if(this.input.current.value!==""){
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
        this.input.current.value="";
    }

    render(){
        return (
            <div className="todoList">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input type="text" name="taskName" ref={this.input}/>
                        <button type="submit">Add</button>               
                    </form>
                </div>
                <List entries={this.state.itens} />                
            </div>
        )
    }
}
export default TodoContainer;