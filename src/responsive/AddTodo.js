import React from "react";
import { Button } from "antd";
import { Input } from "antd";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAddTodo = () => {
    if (!this.state.title) {
      alert("missing title");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 10000),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
  };

  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <Input
          style={{ width: 220 }}
          value={title}
          onChange={(event) => this.handleOnChangeTitle(event)}
        ></Input>
        {/* <input
          type="text"
          value={title}
          onChange={(event) => this.handleOnChangeTitle(event)}
        /> */}
        <Button
          style={{ backgroundColor: "#009900" }}
          type="primary"
          size="middle"
          onClick={() => this.handleAddTodo()}
        >
          Add
        </Button>
        {/* <button type="button" className="add" onClick={() => this.handleAddTodo()}>Add</button> */}
      </div>
    );
  }
}
export default AddTodo;
