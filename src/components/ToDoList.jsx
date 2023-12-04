/* eslint-disable react/prop-types */
import { Component } from "react";

export default class ToDoList extends Component {
  render() {
    const { tasks, deleteMethod, editMethod } = this.props;
    const reversedTasks = [...tasks].reverse();

    return (
      <div className="items">
        {reversedTasks.map((item, index, array) => {
          const reversedIndex = array.length - 1 - index;

          return (
            <div className="item" key={reversedIndex}>
              <span>{item}</span>
              <div className="item-action">
                <button
                  className="delete"
                  onClick={() => deleteMethod(reversedIndex)}
                >
                  Delete
                </button>
                <button
                  className="edit"
                  onClick={() => editMethod(reversedIndex)}
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
