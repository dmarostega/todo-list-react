import React from "react";

class AddItemContainer extends React.Component{
    render(){
        return (
            <div className="addItemContainer">
                <input type="text" name="taskName" />
                <button>Add</button>
            </div>
        );
    }
}

export default AddItemContainer