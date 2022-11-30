import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let user = await axios.get(`https://reqres.in/api/users/${id}`);
      console.log(user.data.data);
      this.setState({
        user: user && user.data ? user.data.data : {},
      });
    }
  }
  handleBackButton = () => {
    this.props.history.push("/user");
  };
  render() {
    let { user } = this.state;
    let checkEmpty = Object.keys(user).length === 0;
    return (
      <>
        {checkEmpty === false && (
          <>
            <div>User's name: {user.last_name}</div>
            <div>User's email: {user.email}</div>
            <div>
              <img src={user.avatar} alt="" />
            </div>
            <div>
              <button type="button" onClick={() => this.handleBackButton()}>
                Back
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(DetailUser);
