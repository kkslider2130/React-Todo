import React from "react";
import ToDoList from "./components/TodoComponents/TodoList";
import FormField from "./components/Form";

const toDo = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: toDo
    };
  }
  addItem = (event, item) => {
    event.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      checked: false
    };
    this.setState({
      toDo: [...this.state.toDo, newItem]
    });
  };

  checkItem = id => {
    this.setState({
      toDo: this.state.toDo.map(a => {
        if (id === a.id) {
          return {
            ...a,
            checked: !a.checked
          };
        }
        return a;
      })
    });
  };

  clearForm = event => {
    event.preventDefault();
    this.setState({
      toDo: this.state.toDo.filter(item => !item.checked)
    });
  };

  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>To-Do List</h1>
        </div>
        <div className="form-body">
          <FormField addItem={this.addItem} />

          <ToDoList toDo={this.state.toDo} checkItem={this.checkItem} />
          <div className="btn-con">
            <button className="clear-btn" onClick={this.clearForm}>
              CLEAR
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
