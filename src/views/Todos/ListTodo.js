import React from "react";
import AddTodo from "./AddTodo";
import "./ListTodo.scss";
import { toast } from "react-toastify";
class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing Homework" },
      { id: "todo2", title: "Making Video" },
      { id: "todo3", title: "Fixing Bug" },
      { id: "todo4", title: "Watching TV" },
    ],
    editTodo: {},
  };
  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("wow so easy!");
  };
  handleDeleteTodo = (todo) => {
    this.setState({
      listTodos: [
        ...this.state.listTodos.filter((item) => {
          return item.id !== todo.id;
        }),
      ],
    });
    toast.info("Deleted!");
  };
  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let checkEmpty = Object.keys(editTodo).length === 0;
    if (checkEmpty === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];
      let objIndex = listTodosCopy.findIndex((obj) => obj.id === todo.id);
      listTodosCopy[objIndex].title = editTodo.title;
      this.setState({
        listTodos: listTodosCopy,
        editTodo: {},
      });
      toast.success("Updated Succeed");
      return;
    }

    this.setState({
      editTodo: todo,
    });
  };
  handleOnChangeEdit = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    let checkEmpty = Object.keys(editTodo).length === 0;
    return (
      <div className="list-todo-container">
        <p>Simple ToDo Apps with React.js (Hoi Dan IT)</p>
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div key={item.id} className="todo-child">
                  {checkEmpty ? (
                    <span>
                      {" "}
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            type="text"
                            value={editTodo.title}
                            onChange={(event) => this.handleOnChangeEdit(event)}
                          />
                        </span>
                      ) : (
                        <span>
                          {" "}
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}
                  <button
                    className="edit"
                    type="button"
                    onClick={() => this.handleEditTodo(item)}
                  >
                    {checkEmpty ? (
                      "Edit"
                    ) : (
                      <>{editTodo.id === item.id ? "Save" : "Edit"}</>
                    )}
                  </button>
                  <button
                    className="delete"
                    type="button"
                    onClick={() => this.handleDeleteTodo(item)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
