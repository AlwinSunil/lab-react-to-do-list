/* eslint-disable react/prop-types */
import { Component } from "react";

export default class Input extends Component {
  render() {
    const { value, handleInputChange, addToDo } = this.props;

    return (
      <form className="input" onSubmit={addToDo}>
        <input type="text" value={value} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>
    );
  }
}
