import React from "react";
import moment from "moment";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };
  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleOnSubmit = () => {
    if (!this.state.title) {
      toast.error("Missing parameter!");
      return;
    }
    this.props.addNewTodo({
      id: moment().unix(),
      title: this.state.title,
    });
    this.setState({
      title: "",
    });
  };
  render() {
    return (
      <div className="add-todo">
        <input
          value={this.state.title}
          type="text"
          onChange={(event) => this.handleChangeTitle(event)}
        />
        <button
          className="add"
          type="button"
          onClick={() => this.handleOnSubmit()}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
