import React from "react";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import { Button } from "antd";
import { Card } from "antd";
class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "doing homework" },
      { id: "todo2", title: "making video" },
      { id: "todo3", title: "fixing bugs" },
      { id: "todo4", title: "lucky" },
    ],
    editTodo: {},
  };
  addNewTodo = (todo) => {
    // let currentListTodo = this.state.listTodos;
    // currentListTodo.push(todo)
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });

    toast.success("Wow so easy?!");
  };
  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodos,
    });
    toast.success("Delete success!");
  };

  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    // save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];

      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

      //Log object to Console.
      console.log("Before update: ", listTodosCopy[objIndex]);

      //Update object's name property.
      listTodosCopy[objIndex].title = editTodo.title;

      this.setState({
        listTodos: listTodosCopy,
        editTodo: {},
      });
      toast.success("Update todo success");
      return;
    }
    //edit
    this.setState({
      editTodo: todo,
    });
  };

  handleOnchaneEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <center>
        <div className="list-todo-container">
          <Card
            title={<AddTodo addNewTodo={this.addNewTodo} />}
            bordered={true}
            style={{
              width: 550,
              textAlign: "center",
             
            }}
          >
            <p>
              <div className="list-todo-content">
                {listTodos &&
                  listTodos.length > 0 &&
                  listTodos.map((item, index) => {
                    return (
                      <div className="todo-child" key={item.id}>
                        {isEmptyObj === true ? (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        ) : (
                          <>
                            {editTodo.id === item.id ? (
                              <span>
                                {index + 1} -{" "}
                                <input
                                  onChange={(event) =>
                                    this.handleOnchaneEditTodo(event)
                                  }
                                  value={editTodo.title}
                                />
                              </span>
                            ) : (
                              <span>
                                {index + 1} - {item.title}
                              </span>
                            )}
                          </>
                        )}
                        <Button style={{backgroundColor:"orange"}}
                          type="primary"
                          size="small"
                          className="edit"
                          onClick={() => this.handleEditTodo(item)}
                        >
                          {isEmptyObj === false && editTodo.id === item.id
                            ? "Save"
                            : "Edit"}
                        </Button>
                        {/* <button
                    className="edit"
                    onClick={() => this.handleEditTodo(item)}
                  >
                    {isEmptyObj === false && editTodo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button> */}
                        <Button
                        style={{backgroundColor:"red"}}
                          type="primary"
                          size="small"
                          className="delete"
                          onClick={() => this.handleDeleteTodo(item)}
                        >
                          Delete
                        </Button>
                        {/* <button
                    className="delete"
                    onClick={() => this.handleDeleteTodo(item)}
                  >
                    Delete
                  </button> */}
                      </div>
                    );
                  })}
              </div>
            </p>
          </Card>
          {/* <AddTodo addNewTodo={this.addNewTodo} /> */}
        </div>
      </center>
    );
  }
}
export default ListTodo;
