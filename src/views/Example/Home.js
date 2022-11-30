import React from "react";
import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount = () => {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  };
  handleDeleteUser = (user) => {
    this.props.deleteUserRedux(user);
  };
  handleCreateUser = () => {
    this.props.createUserRedux();
  };
  render() {
    const listUsers = this.props.dataRedux;
    return (
      <>
        <div>Hello World from Home Page with Bi Nguyen</div>
        <div>
          <button type="button" onClick={() => this.handleCreateUser()}>
            {" "}
            Create Random User
          </button>
        </div>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}{" "}
                  <span onClick={() => this.handleDeleteUser(item)}>X</span>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    createUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};
export default connect(mapStateToProps, mapDispachToProps)(Home);
