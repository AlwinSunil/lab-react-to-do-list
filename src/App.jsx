import { Component } from "react";
import "./App.css";
import Input from "./components/Input";
import ToDoList from "./components/ToDoList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  addToDo = (event) => {
    event.preventDefault();

    if (this.state.newTask.trim() !== "") {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, this.state.newTask],
        newTask: "",
      }));
    }
  };

  deleteToDo = (index) => {
    this.setState((prevState) => {
      const updatedTasks = [...prevState.tasks];
      updatedTasks.splice(index, 1);
      return { tasks: updatedTasks };
    });
  };

  editToDO = (index) => {
    const userInput = prompt(`Update To-Do ${index + 1}`);

    if (userInput !== null && userInput.trim() !== "") {
      this.setState((prevState) => ({
        tasks: prevState.tasks.map((item, itemIndex) =>
          itemIndex === index ? userInput : item
        ),
      }));
    }
  };

  render() {
    return (
      <div className="app">
        <h1>To-do List</h1>

        <Input
          value={this.state.newTask}
          handleInputChange={this.handleInputChange}
          addToDo={this.addToDo}
        />

        <ToDoList
          tasks={this.state.tasks}
          deleteMethod={this.deleteToDo}
          editMethod={this.editToDO}
        />
      </div>
    );
  }
}
